import React, { RefObject } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { Colors } from '../../../constants/colors';
import { spacing } from '../../../constants/spacing';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'border'> {
  variant: IconDefinition;
  bgColor?: Colors[keyof Colors];
  ariaLabel?: string;
  ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null;
}

export const RoundBadge = styled.div<{ color: Colors[keyof Colors] }>`
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: fit-content;
  padding: ${spacing[6]};
`;

export default function Icon({ variant, bgColor, ariaLabel, className = '', ...rest }: IconProps) {
  const renderIcon = (className?: string) => (
    <FontAwesomeIcon
      {...rest}
      icon={variant}
      className={className || ''}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? false : true}
    />
  );

  return bgColor ? (
    <RoundBadge className={className} color={bgColor}>
      {renderIcon()}
    </RoundBadge>
  ) : (
    renderIcon(className)
  );
}
