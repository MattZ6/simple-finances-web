import { memo, useCallback, useMemo } from 'react';

import { TransactionsProviderData } from '@contexts/Transactions/types';

import { formatMoney } from '@utils/formatMoney';

import { Tooltip } from '@components/Tooltip';
import { TransactionCategoryIcon } from '@components/TransactionCategoryIcon';

import { TransactionMenu } from './Menu';
import { TransactionStyles as Styles } from './styles';
// import { Tags } from './Tags';

type Transaction = TransactionsProviderData.Transaction;

type Props = {
  transaction: Transaction;
  onCategoryPressed: (transaction: Transaction) => void;
};

export const Transaction = memo(({ transaction, onCategoryPressed }: Props) => {
  const value = useMemo(() => {
    return formatMoney(transaction.value);
  }, [transaction.value]);

  const handleMenuOptionSelected = useCallback(
    (option: TransactionMenu.Option) => {
      if (option === 'UPDATE_CATEGORY') {
        onCategoryPressed(transaction);
      }
    },
    [onCategoryPressed, transaction]
  );

  return (
    <Styles.Container>
      <Tooltip content="Editar categoria">
        <Styles.CategoryButton
          type="button"
          transactionType={transaction.type}
          onClick={() => onCategoryPressed(transaction)}
        >
          <TransactionCategoryIcon
            label={transaction.category?.slug ?? ''}
            type={transaction.type}
            size={24}
          />
        </Styles.CategoryButton>
      </Tooltip>

      <Styles.Content>
        <Styles.TitleContainer>
          <Styles.Title transactionType={transaction.type}>
            {transaction.title}
          </Styles.Title>
        </Styles.TitleContainer>

        {/* <Tags tags={transaction.tags} /> */}
      </Styles.Content>

      <Styles.Value transactionType={transaction.type}>{value}</Styles.Value>

      <Styles.MenuContainer>
        <TransactionMenu onSelect={handleMenuOptionSelected} />
      </Styles.MenuContainer>
    </Styles.Container>
  );
});
