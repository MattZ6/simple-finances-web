import { styled } from '@styles/stitches.config';

export namespace DatePickerWeeksHeaderStyles {
  export const Header = styled('header', {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 36px)',
    gap: '4px',
  });

  export const Day = styled('strong', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '$medium',

    fontSize: '$small',
    lineHeight: '$normal',
    fontWeight: '400',
    color: '$brandTextLoContrastColor',

    cursor: 'default',
  });
}
