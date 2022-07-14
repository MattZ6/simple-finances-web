import { useQuery } from 'react-query';

import { apiClient } from '@services/simpleFinancesAPI/apiClient';

export namespace ListAllTransactionCategoriesService {
  export type TransactionCategory = {
    id: string;
    title: string;
    description: string;
    slug: string;
  };

  type Response = TransactionCategory[];

  export async function execute() {
    const { data } = await apiClient.get<Response>(
      '/v1/transactions/categories'
    );

    return data;
  }
}

export function useCategories() {
  return useQuery('categories', ListAllTransactionCategoriesService.execute, {
    refetchOnWindowFocus: false,
    staleTime: 1 * 24 * 60 * 60 * 1000, // 👈 1 day
  });
}
