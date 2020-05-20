import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';

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
  ${linkStyle}
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
    return (
      <StyledLink ref={ref} color={color} target={target} {...rest}>
        {children}
        {target === '_blank' && showTargetIcon && <TargetIcon color={color} />}
      </StyledLink>
    );
  },
);

Link.defaultProps = {
  color: colors.actionPlain,
};

export default Link;
