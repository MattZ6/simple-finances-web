import { useQuery } from 'react-query';

import { apiClient } from '@services/simpleFinancesAPI/apiClient';

export namespace ListAllTransactionCategoriesService {
  export type TransactionCategory = {
    id: string;
    title: string;
    description: string;
    type: 'INCOME' | 'OUTCOME';
    slug: string;
  };

  type Request = {
    type: 'INCOME' | 'OUTCOME';
  };

  type Response = TransactionCategory[];

  export async function execute(request: Request) {
    const { data } = await apiClient.get<Response>(
      '/v1/transactions/categories',
      {
        params: request,
      }
    );

    return data;
  }
}

type Input = {
  type: 'INCOME' | 'OUTCOME';
};

export function useCategories({ type }: Input) {
  return useQuery(
    ['categories', type],
    () => ListAllTransactionCategoriesService.execute({ type }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1 * 24 * 60 * 60 * 1000, // 👈 1 day
    }
  );
}
