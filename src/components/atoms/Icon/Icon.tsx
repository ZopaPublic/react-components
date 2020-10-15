import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'border'> {
  variant: IconDefinition;
}

export default function Icon({ variant, ...rest }: IconProps) {
  return <FontAwesomeIcon {...rest} icon={variant} />;
}
