import { TransactionsProviderData } from '@contexts/Transactions/types';

import { Dialog } from './components/Dialog';
import { SelectCategoryProvider } from './context';
import { UpdateTransactionCategoryDialogStyles as Styles } from './styles';

type Props = {
  transaction: TransactionsProviderData.Transaction;
  onCloseRequested: () => void;
};

export function UpdateTransactionCategoryDialog({
  transaction,
  onCloseRequested,
}: Props) {
  return (
    <Styles.Dialog open modal allowPinchZoom>
      <Styles.Portal>
        <Styles.Overlay />

        <SelectCategoryProvider transaction={transaction}>
          <Dialog
            transaction={transaction}
            onCloseRequested={onCloseRequested}
          />
        </SelectCategoryProvider>
      </Styles.Portal>
    </Styles.Dialog>
  );
}
