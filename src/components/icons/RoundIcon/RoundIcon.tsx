import React from 'react';
import styled from 'styled-components';
import { colors, typography, Text } from '../../..';
import CheckMark from '../CheckMark/CheckMark';

interface IRoundIconProps {
  variant?: 'confirmed' | 'waiting' | 'invalid';
}

interface IRoundIconCircleProps {
  bgColor:
    | typeof colors.neutral.nearDark
    | typeof colors.semantic.success
    | typeof colors.semantic.alert
    | typeof colors.semantic.error;
}

const RoundIconCircle = styled.div<IRoundIconCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  font-weight: ${typography.weights.bold};
  border-radius: 100%;
  width: 24px;
  height: 24px;
`;

export default function RoundIcon({ variant }: IRoundIconProps) {
  if (variant === 'confirmed')
    return (
      <RoundIconCircle bgColor={colors.semantic.success}>
        <CheckMark width={10} height={10} color={colors.neutral.white} />
      </RoundIconCircle>
    );

  if (variant === 'waiting')
    return (
      <RoundIconCircle bgColor={colors.semantic.alert}>
        <Text size="small">!</Text>
      </RoundIconCircle>
    );

  if (variant === 'invalid')
    return (
      <RoundIconCircle bgColor={colors.semantic.error}>
        <Text size="small" color={colors.neutral.white}>
          !
        </Text>
      </RoundIconCircle>
    );

  return (
    <RoundIconCircle bgColor={colors.neutral.nearDark}>
      <Text size="small" color={colors.neutral.white}>
        −
      </Text>
    </RoundIconCircle>
  );
}
