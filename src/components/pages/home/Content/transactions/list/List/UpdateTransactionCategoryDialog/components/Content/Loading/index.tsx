import { Skeleton } from '@components/Skeleton';

import { LoadingStyles as Styles } from './styles';

function ItemSkeleton() {
  return (
    <Styles.Item>
      <Skeleton width="44px" height="44px" borderRadius="12px" />

      <Styles.ItemContent>
        <Skeleton width="80%" height="20px" borderRadius="6px" />
        <Skeleton width="100%" height="18px" borderRadius="6px" />
      </Styles.ItemContent>
    </Styles.Item>
  );
}

export function Loading() {
  return (
    <Styles.Container>
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
    </Styles.Container>
  );
}
