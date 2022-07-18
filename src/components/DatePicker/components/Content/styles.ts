import { styled } from '@styles/stitches.config';

export namespace DatePickerContentStyles {
  export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  });

  export const DaysContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 36px)',
    gap: '4px',
  });
}
