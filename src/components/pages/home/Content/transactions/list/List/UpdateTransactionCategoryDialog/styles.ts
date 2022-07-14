import {
  Root as RadixRoot,
  Portal as RadixPortal,
  Overlay as RadixOverlay,
  Content as RadixContent,
  Title as RadixTitle,
} from '@radix-ui/react-dialog';

import { keyframes, styled } from '@styles/stitches.config';

export namespace UpdateTransactionCategoryDialogStyles {
  export const Dialog = RadixRoot;

  export const Portal = RadixPortal;

  const overlayFadeKeyrames = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  export const Overlay = styled(RadixOverlay, {
    width: '100vw',
    height: '100vh',

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.45)',

    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    animationName: overlayFadeKeyrames.toString(),
  });

  const dialogFadeKeyframes = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  export const Content = styled(RadixContent, {
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '$defaultAppBackground',

    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',

    borderRadius: '$medium',

    width: '90vw',
    maxWidth: '480px',
    height: 'fit-content',
    maxHeight: '80vh',

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    animationName: dialogFadeKeyframes.toString(),
  });

  export const Header = styled('header', {
    paddingRight: '$medium',
    paddingLeft: '$medium',
    paddingTop: '$normal',
    paddingBottom: '$small',
  });

  export const Title = styled(RadixTitle, {
    fontSize: '$larger',
    lineHeight: '$larger',
    fontWeight: '700',

    color: '$defaultTextHiContrastColor',
  });

  export const CloseButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    minWidth: '100px',
    height: '42px',

    paddingHorizontal: '$normal',

    border: 'none',
    borderRadius: '$normal',

    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',
    letterSpacing: '0.5px',

    cursor: 'pointer',

    backgroundColor: 'transparent',
    color: '$defaultTextHiContrastColor',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color, background-color, outline-color',

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    '&:focus-visible': {
      backgroundColor: '$defaultElementHoverBackground',
      outlineColor: '$defaultElementBorder',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '$defaultElementBackground',
      color: '$defaultTextLoContrastColor',
    },
  });

  export const SubmitButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    minWidth: '100px',
    height: '42px',

    paddingHorizontal: '$normal',

    border: 'none',
    borderRadius: '$normal',

    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',
    letterSpacing: '0.5px',

    cursor: 'pointer',

    backgroundColor: '$brandSolidBackground',
    color: '$white',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color, background-color, outline-color',

    '&:not(:disabled):hover': {
      backgroundColor: '$brandSolidHoverBackground',
    },

    '&:focus-visible': {
      backgroundColor: '$brandSolidHoverBackground',
      outlineColor: '$brandElementBorder',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '$defaultElementBackground',
      color: '$defaultTextLoContrastColor',
    },
  });

  export const Body = styled('div', {
    overflowX: 'hidden',
    overflowY: 'auto',

    padding: '$normal',

    scrollBehavior: 'smooth',
    scrollSnapType: 'y mandatory',
    scrollPaddingTop: '$small',
    scrollPaddingBottom: '$small',
  });

  export const List = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  });

  export const Category = styled('button', {
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

  export const CategoryContent = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  });

  export const CategoryTitle = styled('strong', {
    fontSize: '$normal',
    lineHeight: '$small',
    fontWeight: '500',
    textAlign: 'start',
    color: '$defaultTextHiContrastColor',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color',
  });

  export const CategoryDescription = styled('small', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: '400',
    textAlign: 'start',
    color: '$defaultTextLoContrastColor',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color',
  });

  export const Footer = styled('footer', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$small',

    paddingTop: '$normal',
    paddingBottom: '$normal',
    paddingLeft: '$small',
    paddingRight: '$small',
  });
}
