import React from 'react';
import { colors } from '../../../../constants';
import Heading, { OptionalHeadingProps, HeadingTags } from '../../../atoms/Heading/Heading';

export interface CardHeadingProps extends OptionalHeadingProps {
  children?: React.ReactNode;
  as?: HeadingTags;
}

const CardHeading = ({
  children,
  size = 'h6',
  as = 'h2',
  color = colors.greyDarkest,
  className,
  ...rest
}: CardHeadingProps) => (
  <Heading as={as} size={size} color={color} className={`zrc__card-heading ${className}`} {...rest}>
    {children}
  </Heading>
);

export default CardHeading;
