import { CurrencyDollarSimple } from 'phosphor-react';
import { memo, useMemo } from 'react';

import { TransactionsProviderData } from '@contexts/Transactions/types';

import { formatMoney } from '@utils/formatMoney';

import { TransactionCategoryIcon } from '@components/TransactionCategoryIcon';

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

  return (
    <Styles.Container>
      <Styles.CategoryButton
        type="button"
        disabled={transaction.type === 'INCOME'}
        transactionType={transaction.type}
        onClick={() => onCategoryPressed(transaction)}
      >
        {transaction.type === 'INCOME' ? (
          <CurrencyDollarSimple size={24} />
        ) : (
          <TransactionCategoryIcon
            label={transaction.category?.slug ?? ''}
            size={24}
          />
        )}
      </Styles.CategoryButton>

      <Styles.Content>
        <Styles.TitleContainer>
          <Styles.Title transactionType={transaction.type}>
            {transaction.title}
          </Styles.Title>
        </Styles.TitleContainer>

        {/* <Tags tags={transaction.tags} /> */}
      </Styles.Content>

      <Styles.Value transactionType={transaction.type}>{value}</Styles.Value>

      {/* <Styles.MenuButton>
        <DotsThreeVertical size={24} weight="bold" />
      </Styles.MenuButton> */}
    </Styles.Container>
  );
});
