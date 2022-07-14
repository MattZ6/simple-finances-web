import { styled } from '@styles/stitches.config';

export namespace LoadingStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  });

  export const Item = styled('div', {
    display: 'flex',
    gap: '$normal',

    padding: '$small',
  });

  export const ItemContent = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
  });
}
