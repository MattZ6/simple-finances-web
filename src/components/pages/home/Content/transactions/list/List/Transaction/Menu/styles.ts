import {
  Root as RadixRoot,
  Content as RadixContent,
  Trigger as RadixTrigger,
  Item as RadixItem,
} from '@radix-ui/react-dropdown-menu';

import { keyframes, styled } from '@styles/stitches.config';

export namespace TransactionMenuStyles {
  export const Root = RadixRoot;

  const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  });

  const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  });

  export const Content = styled(RadixContent, {
    animationDuration: '0.6s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',

    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },

    borderRadius: '$medium',

    backgroundColor: '$defaultAppBackground',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',

    padding: '$small',
  });

  export const Trigger = styled(RadixTrigger, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '36px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    border: 'none',
    backgroundColor: 'transparent',

    color: '$defaultTextLoContrastColor',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, outline-color',

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },
  });

  export const Item = styled(RadixItem, {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    padding: '$small',

    background: 'transparent',

    borderRadius: '$normal',
    border: 'none',

    cursor: 'pointer',

    color: '$defaultTextHiContrastColor',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, outline-color',

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },
  });

  export const ButtonText = styled('span', {
    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '400',
  });
}
