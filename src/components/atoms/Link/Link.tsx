import React from 'react';
import styled, { css } from 'styled-components';
import { colors, typography } from '../../../constants';
import { useThemeContext } from '../../styles/Theme';
export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {
  target?: '_blank';
  negative?: boolean;
  as?: 'a' | 'button';
  showTargetIcon?: boolean;
}

export const linkStyle = css<LinkProps>`
  background-color: transparent;
  font-size: inherit;
  font-family: ${typography.primary};
  font-weight: ${typography.weights.semiBold};
  line-height: inherit;
  color: ${({ negative }) => (negative ? colors.greyDarkest : colors.actionPlain)};
  cursor: pointer;
  text-decoration: underline;
  user-select: auto;
  appearance: none;
  padding: 0;
  border: none;

  &:hover,
  &:active {
    color: ${({ negative }) => (negative ? 'black' : colors.actionDark)};

    svg path {
      fill: ${({ negative }) => (negative ? 'black' : colors.actionDark)};
    }
  }
`;

const StyledLink = styled.a<LinkProps>`
  ${linkStyle};
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ theme }) => theme.link.weight};
  color: ${({ theme }) => theme.link.color};
  &:hover {
    color: ${({ theme }) => theme.link.hover.color};
    svg path {
      fill: ${({ negative, theme }) => (negative ? 'black' : theme.link.hover.color)};
    }
  }
  &:active {
    color: ${({ theme }) => theme.link.active.color};
    svg path {
      fill: ${({ negative, theme }) => (negative ? 'black' : theme.link.active.color)};
    }
  }
`;

const TargetIconWrapper = styled.svg`
  margin-left: 6px;
  top: 2px;
  position: relative;
`;

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <TargetIconWrapper xmlns="http://www.w3.org/2000/svg" width="15" height="15">
      <g fill={props.color || colors.actionPlain}>
        <path d="M2.6 4H0v11h11v-2.6H2.6z" />
        <path d="M4 0v11h11V0H4zm9.7 1.3v8.4L5.2 1.3h8.5z" />
      </g>
    </TargetIconWrapper>
  );
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, color = colors.actionPlain, target, showTargetIcon = true, ...rest }, ref) => {
    const theme = useThemeContext();

    return (
      <StyledLink ref={ref} color={color} target={target} {...rest} theme={theme}>
        {children}
        {target === '_blank' && showTargetIcon && !theme.link.disableTargetIcon && <TargetIcon color={color} />}
      </StyledLink>
    );
  },
);

Link.defaultProps = {
  color: colors.actionPlain,
};

export default Link;
