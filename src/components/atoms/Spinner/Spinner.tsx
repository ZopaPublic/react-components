import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';

export interface ISpinnerProps {
  /**
   * Background color (3 quarters of the spinner)
   */
  backgroundColor?: string;

  /**
   * Width of the border
   */
  borderWidth?: string;

  /**
   * Front color (1 quarter of the spinner)
   */
  frontColor?: string;

  /**
   * Size of the spinner
   */
  size?: string;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SSpinner = styled.div<ISpinnerProps>`
  width: ${({ size = '45px' }) => size};
  height: ${({ size = '45px' }) => size};
  margin: 8px;
  border: ${({ borderWidth = '8px' }) => borderWidth} solid ${({ frontColor = colors.base.primary }) => frontColor};
  border-radius: 50%;
  border-top-color: ${({ backgroundColor = colors.neutral.light }) => backgroundColor};
  animation: ${spin} 1.2s linear infinite;
`;

const Spinner: React.FC<ISpinnerProps> = props => <SSpinner {...props} />;

export default Spinner;
