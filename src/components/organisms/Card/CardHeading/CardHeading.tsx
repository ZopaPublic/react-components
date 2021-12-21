import React, { FC } from 'react';
import { colors } from '../../../../constants';
import Heading, { StyledHeadingProps } from '../../../atoms/Heading/Heading';

const CardHeading: FC<StyledHeadingProps> = ({
  children,
  size = 'h6',
  as = 'h2',
  color = colors.greyDarkest,
  className,
  ...rest
}) => (
  <Heading as={as} size={size} color={color} className={`zrc__card-heading ${className}`} {...rest}>
    {children}
  </Heading>
);

export default CardHeading;
