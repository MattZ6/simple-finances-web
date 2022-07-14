import { useEffect } from 'react';

import { useUpdateTransactionCategory } from '../../context';
import { Category } from './Category';
import { Loading } from './Loading';
import { ContentStyles as Styles } from './styles';

function List() {
  const { categories, selected } = useUpdateTransactionCategory();

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
    }
  }, [selected]);

  return (
    <Styles.Container>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </Styles.Container>
  );
}

export function Content() {
  const { isLoading } = useUpdateTransactionCategory();

  if (isLoading) {
    return <Loading />;
  }

  return <List />;
}
