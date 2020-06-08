import React from 'react';
import styled from 'styled-components';

import { colors, typography } from '../../../constants';
import { Colors } from '../../../constants/colors';
import Text from '../../atoms/Text/Text';

export interface ProgressionStyleProps {
  /**
   * Progress bar colour
   * @default `colors.brand`
   */
  progressColor?: Colors;
}

export interface ProgressProps extends ProgressionStyleProps {
  totalSteps: number;
  currentStep: number;
  withStep?: boolean;
}

export interface ProgressionProps extends ProgressionStyleProps {
  position?: number;
}

export interface ProgressPointProps extends ProgressionStyleProps, ProgressionProps {
  completed: boolean;
}

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  border-radius: 100px;
  background: ${colors.greyLighter};
  height: 4px;
`;

const Progression = styled.div<ProgressionProps>`
  width: ${({ position }) => `${position}%`};
  position: relative;
  border-radius: 100px;
  height: 4px;
  display: block;
  background: ${({ progressColor = colors.brand }) => progressColor};
  transition: width 0.5s ease-in-out;
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

const ProgressPoint = styled.span<ProgressPointProps>`
  position: absolute;
  top: 50%;
  left: ${({ position }) => `${position}%`};

  display: block;
  width: 12px;
  height: 12px;

  background: ${({ completed, progressColor = colors.brand }) => (completed ? progressColor : colors.greyLighter)};
  border-radius: 100%;
  transform: translate(-50%, -50%);
`;

const getStepPosition = (steps: number, stepIndex: number) => (100 / (steps - 1)) * stepIndex;

const Progress: React.FC<ProgressProps> = ({ totalSteps, currentStep, withStep = false, progressColor }) => {
  const renderPoints = () => {
    const points = [];

    for (let i = 0; i < totalSteps; i++) {
      points.push(
        <ProgressPoint
          position={getStepPosition(totalSteps, i)}
          completed={i < currentStep}
          key={`step-${i}`}
          progressColor={progressColor}
        />,
      );
    }

    return points;
  };

  return (
    <ProgressBar>
      {renderPoints()}
      <Progression position={getStepPosition(totalSteps, currentStep - 0.5)} progressColor={progressColor}>
        {withStep && (
          <Text size="small">
            Step {currentStep} of {totalSteps}
          </Text>
        )}
      </Progression>
    </ProgressBar>
  );
};

export default Progress;
