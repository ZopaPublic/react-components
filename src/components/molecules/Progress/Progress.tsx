import React, { CSSProperties, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Text from '../../atoms/Text/Text';

export interface IProgressionStyleProps {
  width?: string;
  progressColor?: string;
}

export interface IProgressProps extends IProgressionStyleProps, HTMLAttributes<HTMLDivElement> {
  totalSteps: number;
  currentStep: number;
  style?: CSSProperties;
  withStep?: boolean;
}

const SProgressBar = styled.div`
  position: relative;
  width: 100%;
  border-radius: 100px;
  background: ${colors.neutral.light};
  height: 4px;
`;

const SProgression = styled.div<IProgressionStyleProps>`
  width: ${({ width }) => width};
  position: relative;
  border-radius: 100px;
  height: 4px;
  display: block;
  background: ${({ progressColor = colors.semantic.alert }) => progressColor};

  > span {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: ${typography.sizes.text.small};
    line-height: 16px;
    font-weight: 600;
    color: ${colors.neutral.dark};
  }
`;

const Progress: React.FC<IProgressProps> = ({ totalSteps, currentStep, withStep = true, progressColor, ...rest }) => (
  <SProgressBar {...rest}>
    <SProgression width={`${(100 / totalSteps) * currentStep}%`} progressColor={progressColor}>
      {withStep && (
        <Text size="small">
          Step {currentStep} of {totalSteps}
        </Text>
      )}
    </SProgression>
  </SProgressBar>
);

export default Progress;
