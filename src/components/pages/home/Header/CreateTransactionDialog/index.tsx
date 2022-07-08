import { yupResolver } from '@hookform/resolvers/yup';
import { DialogTitle } from '@radix-ui/react-dialog';
import { CurrencyDollar, TextT, Check } from 'phosphor-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useBalance } from '@hooks/useBalance';

import { DatePicker } from '@components/DatePicker';
import { FormField } from '@components/forms/FormField';

import { TransactionTypeSwitch } from './components';
import { CreateTransactionDialogStyles as Styles } from './styles';

type Props = {
  isOpen: boolean;
  onOpenStateChange: (isOpen: boolean) => void;
};

type Tag = {
  id: string;
  title: string;
  color_hex: string;
  selected?: boolean;
};

type TagProps = {
  tag: Tag;
  onPress: () => void;
};

function Tag({ tag, onPress }: TagProps) {
  return (
    <Styles.Tag
      style={
        tag.selected
          ? {
              backgroundColor: tag.color_hex,
            }
          : {
              color: tag.color_hex,
              borderColor: tag.color_hex,
            }
      }
      onClick={onPress}
    >
      {tag.selected ? (
        <Check size={12} />
      ) : (
        <Styles.TagDot style={{ backgroundColor: tag.color_hex }} />
      )}
      {tag.title}
    </Styles.Tag>
  );
}

type FormScheme = {
  name: string;
  value: number;
};

export function CreateTransactionDialog({ isOpen, onOpenStateChange }: Props) {
  const [type, setType] = useState<'INCOME' | 'OUTCOME'>('OUTCOME');
  // const [tags, setTags] = useState<Tag[]>([
  //   { id: '1', title: 'Kate', color_hex: '#ca71ff' },
  //   { id: '2', title: 'Adri', color_hex: '#ffd171' },
  //   { id: '3', title: 'CIS', color_hex: '#7671ff' },
  //   { id: '4', title: 'Minha clínica', color_hex: '#ff71fb' },
  // ]);
  const [date, setDate] = useState(new Date());
  const { createTransaction } = useBalance();

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

  const { register, handleSubmit, formState, reset } = useForm<FormScheme>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<FormScheme> = async data => {
    const { name, value } = data;

    try {
      await createTransaction({
        title: name,
        type,
        value,
        date,
      });

      reset();

      onOpenStateChange(false);

      // TODO: Recarregar a lista de meses e recarregar a lista de transações
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles.Root modal open={isOpen} onOpenChange={onOpenStateChange}>
      <Styles.Portal>
        <Styles.Overlay />

        <Styles.Content>
          <DialogTitle>Nova conta</DialogTitle>

          <Styles.Form>
            <Styles.Slot>
              <TransactionTypeSwitch selected={type} onChange={setType} />

              <form onSubmit={handleSubmit(submit)}>
                <FormField
                  label="Título"
                  icon={TextT}
                  placeholder="Do que se trata?"
                  error={formState.errors.name?.message}
                  {...register('name')}
                />

                <FormField
                  label="Valor"
                  icon={CurrencyDollar}
                  type="number"
                  placeholder="0,00"
                  error={formState.errors.value?.message}
                  {...register('value')}
                />

                <Styles.SubmitButton hidden>Salvar</Styles.SubmitButton>
              </form>

              {/* <Styles.TagList>
                {tags.map(tag => (
                  <Tag
                    key={tag.id}
                    tag={tag}
                    onPress={() =>
                      setTags(state =>
                        state.map(x =>
                          x.id === tag.id ? { ...x, selected: !x.selected } : x
                        )
                      )
                    }
                  />
                ))}
              </Styles.TagList> */}
            </Styles.Slot>

            <Styles.Slot>
              <DatePicker onChange={setDate} />
            </Styles.Slot>
          </Styles.Form>

          <Styles.Footer>
            <Styles.CancelButton type="button">Cancelar</Styles.CancelButton>
            <Styles.SubmitButton type="button" onClick={handleSubmit(submit)}>
              Salvar
            </Styles.SubmitButton>
          </Styles.Footer>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
