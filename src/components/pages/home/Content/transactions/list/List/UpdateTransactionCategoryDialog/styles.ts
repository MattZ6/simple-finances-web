import {
  Root as RadixRoot,
  Portal as RadixPortal,
  Overlay as RadixOverlay,
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
}
