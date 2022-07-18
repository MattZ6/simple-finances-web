import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import { ListMonthsService } from '@services/simpleFinancesAPI/listMonths';

import { MonthsProviderData as Types } from './types';

export const MonthsContext = createContext({} as Types.Context);

type Props = {
  children: React.ReactNode;
};

function getKey(value: Date) {
  const date = new Date(value);

  return `${date.getUTCFullYear()}_${date.getUTCMonth()}`;
}

function useGetMonths() {
  return useQuery(
    'months',
    async () => {
      const response = await ListMonthsService.execute();

      return response.map<Types.Month>(month => {
        const date = new Date(month.date);

        return {
          key: getKey(date),
          value: date,
        };
      });
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 12 * 60 * 60 * 1000, // 👈 12hrs
    }
  );
}

export function MonthsProvider({ children }: Props) {
  const { isLoading, isError, data, refetch } = useGetMonths();

  const [selectedMonth, setSelectedMonth] = useState<Types.Selected>();

  const selectMonth = useCallback((input: Types.Month) => {
    setSelectedMonth(state => (state?.key === input.key ? state : input));
  }, []);

  const selectNext = useCallback(() => {
    if (!data) {
      return;
    }

    const selectedIndex = data.findIndex(
      month => month.key === selectedMonth?.key
    );

    if (selectedIndex < data.length - 1) {
      setSelectedMonth(data[selectedIndex + 1]);
    }
  }, [data, selectedMonth]);

  const selectPrevious = useCallback(() => {
    if (!data) {
      return;
    }

    const selectedIndex = data.findIndex(
      month => month.key === selectedMonth?.key
    );

    if (selectedIndex > 0) {
      setSelectedMonth(data[selectedIndex - 1]);
    }
  }, [data, selectedMonth]);

  useEffect(() => {
    if (!data?.length || selectedMonth) {
      return;
    }

    const now = new Date();

    const currentMonth = data.find(
      month =>
        month.value.getUTCFullYear() === now.getUTCFullYear() &&
        month.value.getUTCMonth() === now.getUTCMonth()
    );

    selectMonth(currentMonth ?? data[0]);
  }, [selectMonth, selectedMonth, data]);

  const contextData = useMemo<Types.Context>(() => {
    return {
      isLoading,
      isError,
      months: data ?? [],
      refetch,
      selectedMonth,
      selectMonth,
      selectNext,
      selectPrevious,
    };
  }, [
    isLoading,
    isError,
    data,
    refetch,
    selectedMonth,
    selectMonth,
    selectNext,
    selectPrevious,
  ]);

  return (
    <MonthsContext.Provider value={contextData}>
      {children}
    </MonthsContext.Provider>
  );
}
