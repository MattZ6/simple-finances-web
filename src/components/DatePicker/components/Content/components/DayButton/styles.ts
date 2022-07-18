import { styled } from '@styles/stitches.config';

export namespace DayButtonStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent',

    $$size: '36px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',
    border: 'none',

    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: '500',
    color: '$brandTextHiContrastColor',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, outline-color',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    '&:disabled': {
      cursor: 'not-allowed',

      backgroundColor: 'transparent',
      color: '$brandTextHiContrastColor',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$brandElementHoverBackground',
      cursor: 'pointer',
    },

    '&:focus-visible': {
      outlineColor: '$brandElementBorder',
    },

    variants: {
      selected: {
        true: {
          backgroundColor: '$brandSolidBackground',
          color: '$white',

          '&:not(:disabled):hover': {
            backgroundColor: '$brandSolidHoverBackground',
          },
        },
      },
    },
  });
}
