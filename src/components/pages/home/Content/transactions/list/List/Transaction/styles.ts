import { styled } from '@styles/stitches.config';

export namespace TransactionStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$normal',

    paddingTop: '$normal',
    paddingBottom: '$normal',
    paddingLeft: '$medium',
    paddingRight: '$medium',
  });

  export const CategoryButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '44px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$medium',

    border: 'none',

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, outline-color',

    variants: {
      transactionType: {
        INCOME: {
          backgroundColor: '$successElementBackground',
          color: '$successTextLoContrastColor',

          '&:focus-visible': {
            outlineColor: '$successElementBorder',
          },
        },
        OUTCOME: {
          backgroundColor: '$defaultElementBackground',
          color: '$defaultTextLoContrastColor',

          '&:not(:disabled):hover': {
            backgroundColor: '$defaultElementHoverBackground',
          },

          '&:focus-visible': {
            outlineColor: '$defaultElementBorder',
          },
        },
      },
    },
  });

  export const Content = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  });

  export const TitleContainer = styled('div', {
    display: 'flex',
    gap: '$small',
  });

  export const Title = styled('strong', {
    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',

    variants: {
      transactionType: {
        INCOME: {
          color: '$successSolidBackground',
        },
        OUTCOME: {
          color: '$defaultTextHiContrastColor',
        },
      },
    },
  });

  export const Description = styled('span', {
    fontSize: '$small',
    lineHeight: '$small',
    color: '$defaultTextLoContrastColor',
  });

  export const Value = styled('strong', {
    fontSize: '$medium',
    lineHeight: '$medium',
    fontWeight: '700',
    textAlign: 'end',

    variants: {
      transactionType: {
        INCOME: {
          color: '$successSolidBackground',
        },
        OUTCOME: {
          color: '$defaultTextHiContrastColor',
        },
      },
    },
  });

  export const MenuContainer = styled('div', {
    marginLeft: '-$small',
    marginRight: '-$small',
  });
}
