import React from 'react';
import Tippy, { TippyProps } from '@tippy.js/react';
import TooltipStyles from './TooltipStyles/TooltipStyles';

Tooltip.Styles = TooltipStyles;

export default function Tooltip({ children, ...config }: Omit<TippyProps, 'animation' | 'theme' | 'flipOnUpdate'>) {
  return (
    <Tippy allowHTML={false} placement="top" animation="shift-toward" flipOnUpdate={true} inertia={true} {...config}>
      {children}
    </Tippy>
  );
}
