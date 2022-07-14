import { ListAllTransactionCategoriesService } from '@services/simpleFinancesAPI/transactions/categories/getAll';

export namespace UpdateTransactionCategoryContextData {
  export type Selected =
    | ListAllTransactionCategoriesService.TransactionCategory
    | undefined;

  export type Context = {
    isLoading: boolean;
    categories: ListAllTransactionCategoriesService.TransactionCategory[];
    selected: Selected;
    selectPrevious: () => void;
    selectNext: () => void;
    select: (data: Selected) => void;
    // isSubmiting: boolean;
    // update: () => Promise<void>;
  };
}
