import {
  Root as RadixRoot,
  Portal as RadixPortal,
  Overlay as RadixOverlay,
  Content as RadixContent,
  Title as RadixTitle,
} from '@radix-ui/react-dialog';

import { keyframes, styled } from '@styles/stitches.config';

export namespace CreateTransactionDialogStyles {
  export const Root = RadixRoot;

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

    borderRadius: '$medium',
    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',

    width: '90vw',
    minWidth: '480px',
    maxWidth: '720px',
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

  export const Body = styled('div', {
    display: 'flex',
    gap: '$normal',

    paddingTop: '$small',
    paddingLeft: '$medium',
    paddingRight: '$medium',
  });

  export const LeftContainer = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  });

  export const RightContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '$brandAppSubtleBackground',
    borderRadius: '$medium',

    padding: '$small',
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

    '&[hidden]': {
      width: 0,
      height: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    },

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

    variants: {
      submiting: {
        true: {
          '&:disabled': {
            cursor: 'wait',
            backgroundColor: '$brandSolidHoverBackground',
            color: '$white',
          },

          '> svg > circle': {
            stroke: '$white',
          },
        },
      },
    },
  });
}
