import React from 'react';
import { Lottie } from '@crello/react-lottie';
import spinnerAnimation from './Spinner.json';
import negativeSpinnerAnimation from './SpinnerNegative.json';

export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default 'standard'
   */
  size?: 'standard' | 'small';
  /**
   * Adjusts colour to display on top of dark background
   * @default false
   */
  negative?: boolean;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Spinner: React.FC<SpinnerProps> = (props) => {
  const spinnerOptions = {
    ...defaultOptions,
    animationData: props.negative ? negativeSpinnerAnimation : spinnerAnimation,
  };

  const size = props.size === 'small' ? '20px' : '40px';

  return <Lottie config={spinnerOptions} height={size} width={size} />;
};

export default Spinner;
