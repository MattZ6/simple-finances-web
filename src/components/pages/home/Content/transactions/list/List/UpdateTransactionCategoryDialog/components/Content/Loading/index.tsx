import { memo } from 'react';

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

type Props = {
  skeletonCount?: number;
};

export const Loading = memo(({ skeletonCount = 5 }: Props) => {
  return (
    <Styles.Container>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ItemSkeleton key={`skeleton_${index}`} />
      ))}
    </Styles.Container>
  );
});
