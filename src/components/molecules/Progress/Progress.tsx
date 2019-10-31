import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Text from '../../atoms/Text/Text';

export interface IProgressionStyleProps {
  width?: string;
}

export interface IProgressProps extends IProgressionStyleProps {
  totalSteps: number;
  currentStep: number;
  style: CSSProperties;
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
  background: ${colors.semantic.alert};

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

const Progress: React.FC<IProgressProps> = ({ totalSteps, currentStep, ...rest }) => (
  <SProgressBar {...rest}>
    <SProgression width={`${(100 / totalSteps) * currentStep}%`}>
      <Text size="small">
        Step {currentStep} of {totalSteps}
      </Text>
    </SProgression>
  </SProgressBar>
);

export default Progress;
