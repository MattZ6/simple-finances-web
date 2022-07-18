import { useQuery } from 'react-query';

import { apiClient } from '../apiClient';

export namespace ListMonthsService {
  type Month = {
    date: Date;
  };

  type Response = Month[];

  export async function execute() {
    const { data } = await apiClient.get<Response>('/v1/transactions/months');

    return data;
  }
}

export function useListAllMonths() {
  return useQuery('months', ListMonthsService.execute, {
    refetchOnWindowFocus: false,
    staleTime: 12 * 60 * 60 * 1000, // 👈 12hrs
  });
}
