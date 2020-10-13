import React from 'react';
import { Lottie } from '@crello/react-lottie';
import primarySpinnerAnimation from './SpinnerPrimary.json';
import secondarySpinnerAnimation from './SpinnerSecondary.json';
import negativeSpinnerAnimation from './SpinnerNegative.json';

export type SpinnerStyling = 'primary' | 'secondary' | 'negative';

export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default 'standard'
   */
  size?: 'standard' | 'small';
  /**
   * Determines the styling of the spinner
   * @default 'primary'
   */
  styling?: SpinnerStyling;
}

const animationData: Record<SpinnerStyling, object> = {
  primary: primarySpinnerAnimation,
  secondary: secondarySpinnerAnimation,
  negative: negativeSpinnerAnimation,
};

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
    animationData: animationData[props.styling || 'primary'],
  };

  const size = props.size === 'small' ? '20px' : '40px';

  return <Lottie config={spinnerOptions} height={size} width={size} />;
};

export default Spinner;
