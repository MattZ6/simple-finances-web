import { styled } from '@styles/stitches.config';

export namespace DatePickerPillsStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',

    paddingLeft: '$small',
    paddingRight: '$small',
    paddingBottom: '$small',
  });

  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,

    backgroundColor: 'transparent',
    paddingLeft: '$small',
    paddingRight: '$small',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$brandElementBorder',
    borderRadius: '$medium',

    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: '500',
    color: '$brandSolidBackground',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, border-color, outline-color',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    '&:disabled': {
      cursor: 'not-allowed',

      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '$brandTextLoContrastColor',
    },

    '&:not(:disabled):hover': {
      cursor: 'pointer',

      backgroundColor: '$brandElementHoverBackground',
      color: '$brandSolidHoverBackground',
      borderColor: '$brandElementHoverBorder',
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
            color: '$white',
            borderColor: '$brandSolidHoverBackground',
          },
        },
      },
    },
  });
}
