import React from 'react';
import Tippy, { TippyProps } from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';

export default function Tooltip({ children, ...config }: Omit<TippyProps, 'animation' | 'theme' | 'flipOnUpdate'>) {
  return (
    <Tippy allowHTML={false} placement="top" animation="shift-toward" flipOnUpdate={true} inertia={true} {...config}>
      {children}
    </Tippy>
  );
}
