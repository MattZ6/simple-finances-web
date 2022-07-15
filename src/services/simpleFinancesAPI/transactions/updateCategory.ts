import { useMutation } from 'react-query';

import { useBalance } from '@hooks/useBalance';

import { apiClient } from '@services/simpleFinancesAPI/apiClient';

export namespace UpdateTransactionCategoryService {
  type Request = {
    transaction_id: string;
    category_id: string;
  };

  type Response = void;

  export async function execute(request: Request) {
    const { transaction_id, category_id } = request;

    const { data } = await apiClient.patch<Response>(
      `/v1/transactions/${transaction_id}/category`,
      { category_id }
    );

    return data;
  }
}

export function useUpdateTransactionCategory() {
  const { refetch } = useBalance();

  return useMutation(UpdateTransactionCategoryService.execute, {
    onSuccess: () => {
      refetch();
    },
  });
}
