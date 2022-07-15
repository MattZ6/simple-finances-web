import { useCallback } from 'react';

import { TransactionsProviderData } from '@contexts/Transactions/types';

import { useAlert } from '@hooks/useAlert';

import { useUpdateTransactionCategory } from '@services/simpleFinancesAPI/transactions/updateCategory';

import { LoadingSpinner } from '@components/Spinner';

import { useSelectCategory } from '../../context';
import { Content } from '../Content';
import { DialogStyles as Styles } from './styles';

type Props = {
  transaction: TransactionsProviderData.Transaction;
  onCloseRequested: () => void;
};

export function Dialog({ transaction, onCloseRequested }: Props) {
  const { isLoading, selected } = useSelectCategory();
  const { mutateAsync, isLoading: isSubmiting } =
    useUpdateTransactionCategory();
  const { showAlert } = useAlert();

  const handleSubmit = useCallback(async () => {
    if (!selected) {
      return;
    }

    try {
      await mutateAsync({
        transaction_id: transaction.id,
        category_id: selected.id,
      });

      onCloseRequested();
    } catch (error) {
      const message =
        transaction.type === 'INCOME' ? 'deste recebimento' : 'desta conta';

      showAlert({
        title: 'Falha ao alterar a categoria',
        description: `Não foi possível alterar a categoria ${message} no momento. Por favor, aguarde alguns instantes e tente novamente mais tarde`,
        closeButtonText: 'Ok',
      });
    }
  }, [selected, transaction, mutateAsync, showAlert, onCloseRequested]);

  const title =
    transaction.type === 'INCOME'
      ? 'Qual a categoria desse recebimento?'
      : 'Qual a categoria dessa conta?';

  return (
    <Styles.Content>
      <Styles.Header>
        <Styles.Title>{title}</Styles.Title>
      </Styles.Header>

      <Styles.Body>
        <Content
          isSubmiting={isSubmiting}
          skeletonCount={transaction.type === 'INCOME' ? 3 : 7}
        />
      </Styles.Body>

      <Styles.Footer>
        <Styles.CloseButton
          type="button"
          disabled={isLoading || isSubmiting}
          onClick={() => onCloseRequested()}
        >
          Cancelar
        </Styles.CloseButton>

        <Styles.SubmitButton
          type="button"
          disabled={isLoading || isSubmiting || !selected}
          submiting={isSubmiting}
          onClick={handleSubmit}
        >
          {isSubmiting ? <LoadingSpinner /> : 'Salvar'}
        </Styles.SubmitButton>
      </Styles.Footer>
    </Styles.Content>
  );
}
