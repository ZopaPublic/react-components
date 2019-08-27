import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';

export interface ISpinnerProps {
  /**
   * Background color (3 quarters of the spinner)
   * @default colors.neutral.light
   */
  backgroundColor?: string;

  /**
   * Width of the border
   * @default 8px
   */
  borderWidth?: string;

  /**
   * Front color (1 quarter of the spinner)
   * @default colors.base.primary
   */
  frontColor?: string;

  /**
   * Size of the spinner
   * @default 45px
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
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 8px;
  border: ${({ borderWidth }) => borderWidth} solid ${({ frontColor }) => frontColor};
  border-radius: 50%;
  border-top-color: ${({ backgroundColor }) => backgroundColor};
  animation: ${spin} 1.2s linear infinite;
`;

const Spinner: React.FunctionComponent<ISpinnerProps> = props => <SSpinner {...props} />;

Spinner.defaultProps = {
  backgroundColor: colors.neutral.light,
  borderWidth: '8px',
  frontColor: colors.base.primary,
  size: '45px',
};

export default Spinner;
