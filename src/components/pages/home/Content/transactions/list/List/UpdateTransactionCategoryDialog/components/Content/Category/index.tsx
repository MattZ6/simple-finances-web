import { KeyboardEvent, memo, useCallback } from 'react';

import { ListAllTransactionCategoriesService } from '@services/simpleFinancesAPI/transactions/categories/getAll';

import { TransactionCategoryIcon } from '@components/TransactionCategoryIcon';

import { useSelectCategory } from '../../../context';
import { Category as Styles } from './styles';

type Props = {
  disabled?: boolean;
  category: ListAllTransactionCategoriesService.TransactionCategory;
};

export const Category = memo(({ category, disabled }: Props) => {
  const { selected, select, selectPrevious, selectNext } = useSelectCategory();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }

      const keymaps: { [key: string]: () => void } = {
        ArrowUp: () => selectPrevious(),
        ArrowDown: () => selectNext(),
      };

      const callback = keymaps[event.code];

      if (callback) {
        event.preventDefault();
        event.stopPropagation();

        callback();
      }
    },
    [disabled, selectPrevious, selectNext]
  );

  return (
    <Styles.Button
      id={category.id}
      selected={category.id === selected?.id}
      tabIndex={category.id === selected?.id ? 0 : -1}
      onClick={() => select(category)}
      onKeyDown={handleKeyDown}
      disabled={disabled}
    >
      <Styles.IconContainer>
        <TransactionCategoryIcon
          label={category.slug}
          type={category.type}
          size={24}
        />
      </Styles.IconContainer>

      <Styles.Content>
        <Styles.Title>{category.title}</Styles.Title>
        <Styles.Description>{category.description}</Styles.Description>
      </Styles.Content>
    </Styles.Button>
  );
});
