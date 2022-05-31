import React, { FC } from 'react';
import { colors } from '../../../../constants';
import Heading, { OptionalHeadingProps, HeadingTags } from '../../../atoms/Heading/Heading';

interface CardHeadingProps extends OptionalHeadingProps {
  as?: HeadingTags;
}

const CardHeading: FC<CardHeadingProps> = ({
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
