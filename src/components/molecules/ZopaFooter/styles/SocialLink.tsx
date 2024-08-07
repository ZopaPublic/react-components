import React, { ComponentType } from 'react';
import { Icon } from '../ZopaFooter';
import styled from 'styled-components';
import Link, { LinkProps } from '../../../atoms/Link/Link';
import { spacing } from '../../../../constants';

interface SocialLink extends LinkProps {
  variant?: string;
  CustomIcon?: ComponentType;
  hoverColor?: string;
  margin?: string;
}

const LinkWrapper = styled(Link)<{ hoverColor?: string; margin?: string }>`
  margin: 0 ${spacing[2]};

  color: ${({ hoverColor }) => hoverColor};
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    svg path {
      fill: ${({ negative, hoverColor }) => (negative ? 'black' : hoverColor)};
    }
  }
  &:active {
    color: ${({ hoverColor }) => hoverColor};
    svg path {
      fill: ${({ negative, hoverColor }) => (negative ? 'black' : hoverColor)};
    }
  }
`;

export const SocialLink = ({ variant, CustomIcon, hoverColor, ...otherProps }: SocialLink) => {
  return (
    <LinkWrapper
      hoverColor={hoverColor}
      margin="none"
      target="_blank"
      rel="noopener"
      showTargetIcon={false}
      {...otherProps}
    >
      {CustomIcon ? <CustomIcon /> : <Icon variant={variant!} />}
    </LinkWrapper>
  );
};
