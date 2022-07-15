import { useEffect } from 'react';

import { useSelectCategory } from '../../context';
import { Category } from './Category';
import { Loading } from './Loading';
import { ContentStyles as Styles } from './styles';

type ListProps = {
  isSubmiting?: boolean;
};

function List({ isSubmiting }: ListProps) {
  const { categories, selected } = useSelectCategory();

  useEffect(() => {
    if (selected) {
      const element = document.getElementById(selected.id);

      if (element) {
        setTimeout(() => {
          element.focus({ preventScroll: true });
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }, 0);
      }
    } else if (categories.length) {
      const element = document.getElementById(categories[0].id);

      if (element) {
        setTimeout(() => {
          element.focus({ preventScroll: true });
        }, 0);
      }
    }
  }, [selected, categories]);

  return (
    <Styles.Container>
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          disabled={!!isSubmiting}
        />
      ))}
    </Styles.Container>
  );
}

type Props = {
  isSubmiting?: boolean;
  skeletonCount?: number;
};

export function Content({ isSubmiting, skeletonCount }: Props) {
  const { isLoading } = useSelectCategory();

  if (isLoading) {
    return <Loading skeletonCount={skeletonCount} />;
  }

  return <List isSubmiting={isSubmiting} />;
}
