import React from 'react';
import styled from 'styled-components';
import Link, { ILinkProps } from '../../../atoms/Link/Link';
import { Icon } from './Icon';
import { spacing } from '../../../../constants/spacing';

interface ISocialLink extends ILinkProps {
  variant: string;
}

const SLink = styled(Link)`
  margin: 0 ${spacing[2]};
`;

export const SocialLink = ({ variant, ...otherProps }: ISocialLink) => (
  <SLink {...otherProps}>
    <Icon variant={variant} />
  </SLink>
);
