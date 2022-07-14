import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { TransactionsProviderData } from '@contexts/Transactions/types';

import { useCategories } from '@services/simpleFinancesAPI/transactions/categories/getAll';

import { UpdateTransactionCategoryContextData } from './types';

const UpdateTransactionCategoryContext = createContext(
  {} as UpdateTransactionCategoryContextData.Context
);

type Props = {
  transaction: TransactionsProviderData.Transaction;
  children: React.ReactNode;
};

export function UpdateTransactionCategoryProvider({
  transaction,
  children,
}: Props) {
  const { data, isLoading } = useCategories({ type: transaction.type });
  const [selected, setSelected] =
    useState<UpdateTransactionCategoryContextData.Selected>(
      transaction.category
    );

  const selectPrevious = useCallback(() => {
    setSelected(state => {
      if (!data) {
        return state;
      }

      const selectedItemIndex = data.findIndex(
        category => category.id === state?.id
      );

      if (selectedItemIndex > 0) {
        return data[selectedItemIndex - 1];
      }

      return state;
    });
  }, [data]);

  const selectNext = useCallback(() => {
    setSelected(state => {
      if (!data) {
        return state;
      }

      const selectedItemIndex = data.findIndex(
        category => category.id === state?.id
      );

      if (selectedItemIndex < data.length - 1) {
        return data[selectedItemIndex + 1];
      }

      return state;
    });
  }, [data]);

  const contextData =
    useMemo<UpdateTransactionCategoryContextData.Context>(() => {
      return {
        isLoading,
        categories: data ?? [],
        selected,
        selectPrevious,
        selectNext,
        select: setSelected,
      };
    }, [selected, isLoading, data, selectPrevious, selectNext]);

  return (
    <UpdateTransactionCategoryContext.Provider value={contextData}>
      {children}
    </UpdateTransactionCategoryContext.Provider>
  );
}

export function useUpdateTransactionCategory() {
  return useContext(UpdateTransactionCategoryContext);
}
