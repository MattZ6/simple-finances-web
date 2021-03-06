import { apiClient } from './apiClient';

export namespace GetBalanceService {
  export type Tag = {
    id: string;
    title: string;
    color_hex: string;
  };

  export type Transaction = {
    id: string;
    title: string;
    value: number;
    type: 'INCOME' | 'OUTCOME';
    date: Date;
    tags: Tag[];
  };

  type Balance = {
    income: number;
    outcome: number;
    total: number;
    transactions: Transaction[];
  };

  type Request = {
    date: Date;
  };

  export type Response = Balance;

  export async function execute(request: Request) {
    const { data } = await apiClient.get<Response>('/v1/transactions/balance', {
      params: {
        date: request.date.toISOString(),
      },
    });

    return data;
  }
}
