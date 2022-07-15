import { styled } from '@styles/stitches.config';

export namespace Category {
  export const Button = styled('button', {
    display: 'flex',
    gap: '$normal',

    scrollSnapAlign: 'start',

    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '$medium',

    padding: '$small',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, outline-color',

    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',

      '> aside': {
        backgroundColor: '$defaultElementHoverBackground',
      },
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
      backgroundColor: '$defaultElementHoverBackground',

      '> aside': {
        backgroundColor: '$defaultElementHoverBackground',
      },
    },

    '&:focus': {
      outlineColor: '$defaultElementBorder',
    },

    variants: {
      selected: {
        true: {
          backgroundColor: '$brandElementBackground',

          '&:not(:disabled):hover': {
            backgroundColor: '$brandElementHoverBackground',

            '> aside': {
              backgroundColor: '$brandElementHoverBackground',
            },
          },

          '&:focus-visible': {
            outlineColor: '$brandElementBorder',
            backgroundColor: '$brandElementHoverBackground',

            '> aside': {
              backgroundColor: '$brandElementHoverBackground',
            },
          },

          '&:focus': {
            outlineColor: '$brandElementBorder',
          },

          '> aside': {
            backgroundColor: '$brandElementHoverBackground',
            color: '$brandSolidBackground',
          },

          '> div > strong': {
            color: '$brandSolidBackground',
          },

          '> div > small': {
            color: '$brandTextLoContrastColor',
          },
        },
      },
    },
  });

  export const IconContainer = styled('aside', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '44px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$medium',

    backgroundColor: '$defaultElementBackground',
    color: '$defaultTextLoContrastColor',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color',
  });

  export const Content = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  });

  export const Title = styled('strong', {
    fontSize: '$normal',
    lineHeight: '$small',
    fontWeight: '500',
    textAlign: 'start',
    color: '$defaultTextHiContrastColor',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color',
  });

  export const Description = styled('small', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: '400',
    textAlign: 'start',
    color: '$defaultTextLoContrastColor',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color',
  });
}
