import React from 'react';
import styled from 'styled-components';
import Link, { LinkProps } from '../../../atoms/Link/Link';
import { Icon } from './Icon';
import { spacing } from '../../../../constants';

export interface SocialLink extends LinkProps {
  variant: string;
}

const LinkWrapper = styled(Link)`
  margin: 0 ${spacing[2]};
`;

export const SocialLink = ({ variant, ...otherProps }: SocialLink) => (
  <LinkWrapper {...otherProps}>
    <Icon variant={variant} />
  </LinkWrapper>
);
