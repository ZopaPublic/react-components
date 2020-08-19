import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import TooltipStyles from './TooltipStyles/TooltipStyles';

Tooltip.Styles = TooltipStyles;

export default function Tooltip({ children, ...config }: Omit<TippyProps, 'animation' | 'theme' | 'flipOnUpdate'>) {
  return (
    <Tippy allowHTML={false} placement="top" animation="shift-toward" inertia={true} {...config}>
      {children}
    </Tippy>
  );
}
