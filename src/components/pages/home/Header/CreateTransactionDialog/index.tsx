import { yupResolver } from '@hookform/resolvers/yup';
import { CurrencyDollar, TextT } from 'phosphor-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAlert } from '@hooks/useAlert';
import { useBalance } from '@hooks/useBalance';

import { useCreateTransaction } from '@services/simpleFinancesAPI/transactions/create';

import { DatePicker } from '@components/DatePicker';
import { FormField } from '@components/forms/FormField';
import { LoadingSpinner } from '@components/Spinner';

import { TransactionTypeSwitch } from './components';
import { CreateTransactionDialogStyles as Styles } from './styles';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Obrigatório')
    .trim()
    .min(3, 'Pelo menos 3 caracteres'),
  value: yup
    .number()
    .required('Obrigatório')
    .typeError('Valor inválido')
    .min(0.01, 'No mínimo R$ 0,01'),
});

type Props = {
  onCloseRequested: () => void;
};

type FormScheme = {
  name: string;
  value: number;
};

export function CreateTransactionDialog({ onCloseRequested }: Props) {
  const [type, setType] = useState<'INCOME' | 'OUTCOME'>('OUTCOME');
  const [date, setDate] = useState(new Date());
  const { mutateAsync, isLoading: isSubmiting } = useCreateTransaction();
  const { showAlert } = useAlert();

  const { register, handleSubmit, formState, reset } = useForm<FormScheme>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<FormScheme> = async data => {
    const { name, value } = data;

    try {
      await mutateAsync({
        title: name,
        type,
        value,
        date,
      });

      onCloseRequested();

      reset();

      // TODO: Recarregar a lista de meses e recarregar a lista de transações
    } catch (error) {
      showAlert({
        title: 'Falha ao salvar a conta',
        description:
          'Não foi possível salvar a conta nesse momento. Por favor, tente novamente mais tarde',
        closeButtonText: 'Ok',
      });
      // TODO: Tratar os erros
    }
  };

  return (
    <Styles.Root modal open>
      <Styles.Portal>
        <Styles.Overlay />

        <Styles.Content>
          <Styles.Header>
            <Styles.Title>Nova conta</Styles.Title>
          </Styles.Header>

          <Styles.Body>
            <Styles.LeftContainer>
              <TransactionTypeSwitch
                selected={type}
                onChange={setType}
                disabled={isSubmiting}
              />

              <form onSubmit={handleSubmit(submit)}>
                <FormField
                  label="Título"
                  icon={TextT}
                  placeholder="Do que se trata?"
                  error={formState.errors.name?.message}
                  disabled={isSubmiting}
                  {...register('name')}
                />

                <FormField
                  label="Valor"
                  icon={CurrencyDollar}
                  type="number"
                  placeholder="0,00"
                  error={formState.errors.value?.message}
                  disabled={isSubmiting}
                  {...register('value')}
                />

                <Styles.SubmitButton
                  type="submit"
                  hidden
                  tabIndex={-1}
                  disabled={isSubmiting}
                >
                  Salvar
                </Styles.SubmitButton>
              </form>
            </Styles.LeftContainer>

            <Styles.RightContainer>
              <DatePicker onChange={setDate} disabled={isSubmiting} />
            </Styles.RightContainer>
          </Styles.Body>

          <Styles.Footer>
            <Styles.CloseButton
              type="button"
              disabled={isSubmiting}
              onClick={onCloseRequested}
            >
              Cancelar
            </Styles.CloseButton>
            <Styles.SubmitButton
              type="button"
              onClick={handleSubmit(submit)}
              disabled={isSubmiting}
              submiting={isSubmiting}
            >
              {isSubmiting ? <LoadingSpinner /> : 'Salvar'}
            </Styles.SubmitButton>
          </Styles.Footer>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
