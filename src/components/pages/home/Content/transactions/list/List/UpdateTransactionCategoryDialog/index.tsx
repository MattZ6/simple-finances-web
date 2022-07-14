import { TransactionsProviderData } from '@contexts/Transactions/types';

import { Content } from './components';
import {
  UpdateTransactionCategoryProvider,
  useUpdateTransactionCategory,
} from './context';
import { UpdateTransactionCategoryDialogStyles as Styles } from './styles';

type Props = {
  transaction: TransactionsProviderData.Transaction;
  onCloseRequested: () => void;
};

export function UpdateTransactionCategoryDialog({
  transaction,
  onCloseRequested,
}: Props) {
  const { isLoading } = useUpdateTransactionCategory();

  const title =
    transaction.type === 'INCOME'
      ? 'Qual a categoria desse recebimento?'
      : 'Qual a categoria dessa conta?';

  return (
    <Styles.Dialog open modal allowPinchZoom>
      <Styles.Portal>
        <Styles.Overlay />

        <UpdateTransactionCategoryProvider transaction={transaction}>
          <Styles.Content>
            <Styles.Header>
              <Styles.Title>{title}</Styles.Title>
            </Styles.Header>

            <Styles.Body>
              <Content />
            </Styles.Body>

            <Styles.Footer>
              <Styles.CloseButton
                type="button"
                disabled={isLoading}
                onClick={() => onCloseRequested()}
              >
                Cancelar
              </Styles.CloseButton>
              <Styles.SubmitButton type="button" disabled>
                Em breve...
              </Styles.SubmitButton>
            </Styles.Footer>
          </Styles.Content>
        </UpdateTransactionCategoryProvider>
      </Styles.Portal>
    </Styles.Dialog>
  );
}
