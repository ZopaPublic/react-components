import React, { CSSProperties, HTMLAttributes } from 'react';
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

export interface ProgressProps extends ProgressionStyleProps, HTMLAttributes<HTMLDivElement> {
  totalSteps: number;
  currentStep: number;
  style?: CSSProperties;
  withStep?: boolean;
}

export interface ProgressionProps extends ProgressionStyleProps {
  position?: number;
}

export interface ProgressPointProps extends ProgressionStyleProps, ProgressionProps {
  completed: boolean;
}
const PROGRESS_POINT_RADIUS = 6;

const ProgressWrapper = styled.div`
  margin-left: ${PROGRESS_POINT_RADIUS}px;
  margin-right: ${PROGRESS_POINT_RADIUS}px;
`;

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
  width: ${PROGRESS_POINT_RADIUS * 2}px;
  height: ${PROGRESS_POINT_RADIUS * 2}px;

  background: ${({ completed, progressColor = colors.brand }) => (completed ? progressColor : colors.greyLighter)};
  border-radius: 100%;
  transform: translate(-50%, -50%);
`;

const getStepPosition = (steps: number, stepIndex: number) => {
  const position = (100 / (steps - 1)) * stepIndex;
  if (position < 0) {
    return 0;
  }
  if (position > 100) {
    return 100;
  }
  return position;
};

const Progress: React.FC<ProgressProps> = ({ totalSteps, currentStep, withStep = false, progressColor, ...rest }) => {
  const renderPoints = () => {
    return [...Array(totalSteps).keys()].map((stepPoint) => {
      return (
        <ProgressPoint
          position={getStepPosition(totalSteps, stepPoint)}
          completed={stepPoint < currentStep}
          key={`step-${stepPoint}`}
          progressColor={progressColor}
        />
      );
    });
  };

  return (
    <ProgressWrapper>
      <ProgressBar aria-label={`Progress Bar showing step ${currentStep} of ${totalSteps}`} {...rest}>
        {renderPoints()}
        <Progression position={getStepPosition(totalSteps, currentStep - 0.5)} progressColor={progressColor}>
          {withStep && (
            <Text size="small">
              Step {currentStep} of {totalSteps}
            </Text>
          )}
        </Progression>
      </ProgressBar>
    </ProgressWrapper>
  );
};

export default Progress;
