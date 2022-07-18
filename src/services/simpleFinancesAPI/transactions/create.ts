import { useMutation, useQueryClient } from 'react-query';

import { useBalance } from '@hooks/useBalance';
import { useMonths } from '@hooks/useMonths';

import { apiClient } from '../apiClient';

export namespace CreateTransactionService {
  export type Request = {
    title: string;
    value: number;
    date: Date;
    type: 'INCOME' | 'OUTCOME';
  };

  type Response = void;

  export async function execute(data: Request) {
    const { title, value, date, type } = data;

    return apiClient.post<Response>('/v1/transactions', {
      title,
      value,
      date: date.toISOString(),
      type,
    });
  }
}

export function useCreateTransaction() {
  const { months, refetch: reloadMonths, selectedMonth } = useMonths();
  const { refetch: reloadBalance } = useBalance();
  const queryClient = useQueryClient();

  return useMutation(CreateTransactionService.execute, {
    onSuccess: (_, request) => {
      const date = new Date(request.date);

      queryClient.invalidateQueries([
        'balance',
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
      ]);

      const alreadyLoadedThisMonth = months.some(
        month =>
          month.value.getUTCFullYear() === date.getUTCFullYear() &&
          month.value.getUTCMonth() === date.getUTCMonth()
      );

      if (!alreadyLoadedThisMonth) {
        reloadMonths();
      }

      const mustReloadTransactions =
        selectedMonth?.value.getUTCFullYear() === date.getUTCFullYear() &&
        selectedMonth?.value.getUTCMonth() === date.getUTCMonth();

      if (mustReloadTransactions) {
        reloadBalance();
      }
    },
  });
}
