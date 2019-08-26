import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as colors from '../../../constants/colors';

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
  backgroundColor: colors.extended.teal100,
  borderWidth: '8px',
  frontColor: colors.base.white,
  size: '45px',
};

export default Spinner;
