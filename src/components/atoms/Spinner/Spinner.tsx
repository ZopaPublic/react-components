import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';

export interface ISpinnerProps {
  /**
   * Size of the spinner
   * @default false
   */
  small?: boolean;
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

const StyledSpinner = styled.div<ISpinnerProps>`
  ${({ small = false, negative = false }) => `
    width: ${small ? 20 : 40}px;
    height: ${small ? 20 : 40}px;
    border: ${small ? 3 : 6}px solid ${negative ? colors.white : colors.actionPlain}};
  `}
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 1.2s linear infinite;
`;

const Spinner: React.FC<ISpinnerProps> = props => <StyledSpinner {...props} />;

export default Spinner;
