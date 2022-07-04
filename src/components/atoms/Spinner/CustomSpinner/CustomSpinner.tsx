import * as React from 'react';
import styled, { css } from 'styled-components';
import { useThemeContext } from '../../../styles/Theme';
import { SpinnerProps } from '../Spinner';

export interface CustomSpinnerProps {
  size?: SpinnerProps['size'];
  styling?: SpinnerProps['styling'];
  color?: string;
  negativeColor?: string;
  fillWidth?: string;
  speed?: number;
}

const CustomSpinnerContainer = styled.div<{ size: SpinnerProps['size'] }>`
  width: ${({ size = 'standard' }) => (size === 'standard' ? '40px' : '20px')};
  height: ${({ size = 'standard' }) => (size === 'standard' ? '40px' : '20px')};
`;

const Spinner = styled.div<CustomSpinnerProps>`
  box-sizing: border-box;
  display: inline-block;
  animation-name: anim-spinner;
  animation-duration: ${({ speed }) => `${speed}s`};;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin: 0;
  .circle {
    width: ${({ size = 'standard' }) => (size === 'standard' ? '38px' : '18px')};
    height: ${({ size = 'standard' }) => (size === 'standard' ? '19px' : '9px')};
    overflow: hidden;
  }
  .circle-inner {
    transform: rotate(45deg);
    border-radius: 50%;
    border-width: ${({ fillWidth }) => fillWidth}
    border-color: ${({ color, negativeColor, styling }) => (styling === 'negative' ? negativeColor : color)}
    border-style: solid;
    border-right: 0.25em solid transparent;
    border-bottom: 0.25em solid transparent;
    width: 100%;
    height: 200%;
    animation-name: anim-circle-1;
    animation-duration: 0.7s
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.5, 1);
  }
  .circle-2 {
    transform: rotate(180deg);
  }
  .circle-2 .circle-inner {
    animation-name: anim-circle-2;
  }
 @keyframes anim-circle-1 {
    from {
      transform: rotate(60deg);
    }
    to {
      transform: rotate(205deg);
    }
  }
  @keyframes anim-circle-2 {
    from {
      transform: rotate(30deg);
    }
    to {
      transform: rotate(-115deg);
    }
  } 
  @keyframes anim-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CustomSpinner = ({ size, styling }: CustomSpinnerProps) => {
  const theme = useThemeContext();

  return (
    <CustomSpinnerContainer size={size}>
      <Spinner
        size={size}
        styling={styling}
        color={theme.spinner.customSpinner?.color}
        negativeColor={theme.spinner.customSpinner?.negativeColor}
        fillWidth={theme.spinner.customSpinner?.fillWidth}
        speed={theme.spinner.customSpinner?.speed}
        aria-label="loading spinner"
      >
        <div className="circle circle-1">
          <div className="circle-inner"></div>
        </div>
        <div className="circle circle-2">
          <div className="circle-inner"></div>
        </div>
      </Spinner>
    </CustomSpinnerContainer>
  );
};

export default CustomSpinner;
