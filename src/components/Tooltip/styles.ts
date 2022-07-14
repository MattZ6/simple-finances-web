import {
  Root as RadixRoot,
  Trigger as RadixTrigger,
  Content as RadixContent,
  Arrow as RadixArrow,
} from '@radix-ui/react-tooltip';

import { keyframes, styled } from '@styles/stitches.config';

export namespace TooltipStyles {
  export const Root = RadixRoot;

  export const Trigger = RadixTrigger;

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

    paddingLeft: '$small',
    paddingRight: '$small',

    backgroundColor: '#222',
    color: '$white',

    fontSize: '$small',
    lineHeight: '$small',

    borderRadius: '$normal',
  });

  export const Arrow = styled(RadixArrow, {});
}
