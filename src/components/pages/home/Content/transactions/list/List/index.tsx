import { useState } from 'react';

import { TransactionsProviderData } from '@contexts/Transactions/types';

import { useBalance } from '@hooks/useBalance';

import { Day } from './Day';
import { ListStyles as Styles } from './styles';
import { Transaction } from './Transaction';
import { UpdateTransactionCategoryDialog } from './UpdateTransactionCategoryDialog';

type SelectedTransaction = TransactionsProviderData.Transaction | undefined;

export function List() {
  const { dayTransactions } = useBalance();
  const [selectedTransaction, setSelectedTransaction] =
    useState<SelectedTransaction>();

  return (
    <>
      {selectedTransaction && (
        <UpdateTransactionCategoryDialog
          transaction={selectedTransaction}
          onCloseRequested={() => setSelectedTransaction(undefined)}
        />
      )}

      <Styles.Container>
        {dayTransactions.map(day => (
          <Styles.DayTransactionsContainer key={day.key}>
            <Day date={day.date} />

            <Styles.Transactions>
              {day.transactions.map(transaction => (
                <Transaction
                  key={transaction.id}
                  transaction={transaction}
                  onCategoryPressed={setSelectedTransaction}
                />
              ))}
            </Styles.Transactions>
          </Styles.DayTransactionsContainer>
        ))}
      </Styles.Container>
    </>
  );
}
