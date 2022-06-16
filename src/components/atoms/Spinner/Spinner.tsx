import React from 'react';
import deprecated from 'deprecated-prop-type';
import brandSpinner from './spinner-brand.gif';
import actionSpinner from './spinner-action.gif';
import negativeSpinner from './spinner-negative.gif';
import { useThemeContext } from '../../styles/Theme';
import unbrandedSpinner from '../../../content/images/unbranded-spinner.gif';
import unbrandedNegativeSpinner from '../../../content/images/unbranded-spinner-negative.gif';

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
  /**
   * Adjusts colour to display on top of dark background
   * @default false
   */
  negative?: boolean;
}

const animationDataDefault: Record<SpinnerStyling, string> = {
  primary: brandSpinner,
  secondary: actionSpinner,
  negative: negativeSpinner,
};

const animationDataUnbranded: Record<SpinnerStyling, string> = {
  primary: unbrandedSpinner,
  secondary: unbrandedSpinner,
  negative: unbrandedNegativeSpinner,
};

const Spinner: React.FC<SpinnerProps> = (props) => {
  const theme = useThemeContext();

  const animationData = theme?.spinner?.spinnerTheme === 'unbranded' ? animationDataUnbranded : animationDataDefault;

  deprecated(props.negative, 'negative prop is deprecated, use styling="negative" instead');

  const spinner = props.negative ? negativeSpinner : animationData[props.styling || 'primary'];

  const size = props.size === 'small' ? '20px' : '40px';

  return <img src={spinner} height={size} width={size} aria-label="loading spinner" />;
};

export default Spinner;
