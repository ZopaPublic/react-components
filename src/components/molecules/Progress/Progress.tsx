import React, { CSSProperties, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Text from '../../atoms/Text/Text';

export interface ProgressionStyleProps {
  width?: string;
  progressColor?: string;
}

export interface ProgressProps extends ProgressionStyleProps, HTMLAttributes<HTMLDivElement> {
  totalSteps: number;
  currentStep: number;
  style?: CSSProperties;
  withStep?: boolean;
}

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  border-radius: 100px;
  background: ${colors.greyLighter};
  height: 4px;
`;

const Progression = styled.div<ProgressionStyleProps>`
  width: ${({ width }) => width};
  position: relative;
  border-radius: 100px;
  height: 4px;
  display: block;
  background: ${({ progressColor = colors.brand }) => progressColor};

  > span {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: ${typography.sizes.text.small};
    line-height: 16px;
    font-weight: 600;
    color: ${colors.greyDarkest};
  }
`;

const Progress: React.FC<ProgressProps> = ({ totalSteps, currentStep, withStep = true, progressColor, ...rest }) => (
  <ProgressBar {...rest}>
    <Progression width={`${(100 / totalSteps) * currentStep}%`} progressColor={progressColor}>
      {withStep && (
        <Text size="small">
          Step {currentStep} of {totalSteps}
        </Text>
      )}
    </Progression>
  </ProgressBar>
);

export default Progress;
