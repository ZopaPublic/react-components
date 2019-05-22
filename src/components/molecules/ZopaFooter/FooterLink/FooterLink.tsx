import React from 'react';
import styled from 'styled-components';

import * as colors from '../../../../constants/colors';

export interface IFooterLink extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: 'default' | 'small';
}

const sizes = {
  default: '16px',
  small: '11px',
};

export const FooterLink = styled.a<IFooterLink>`
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  font-size: ${({ size }) => size && sizes[size]};
  color: ${colors.neutral.neutral200};
  transition: color 0.2s ease;
  &:hover {
    color: ${colors.neutral.neutral400};
  }
`;

FooterLink.defaultProps = {
  size: 'default',
};

export default FooterLink;
