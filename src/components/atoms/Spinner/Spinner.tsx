import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';

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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  ${({ size = 'standard', negative = false }) => css`
    width: ${size === 'small' ? 20 : 40}px;
    height: ${size === 'small' ? 20 : 40}px;
    border: ${size === 'small' ? 3 : 6}px solid ${negative ? colors.white : colors.actionPlain}};
  `}
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 1.2s linear infinite;
`;

const Spinner: React.FC<SpinnerProps> = props => <StyledSpinner {...props} />;

export default Spinner;
