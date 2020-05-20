import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import Link, { LinkProps } from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export interface StyledNavbarLinkProps extends LinkProps {
  active: boolean;
  withChevron: boolean;
}

const StyledNavbarLink = styled(Link)<StyledNavbarLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ color }) => color};

  &:active,
  &:hover {
    opacity: ${({ active }) => (active ? 1 : 0.88)};
  }
`;

export interface ChevronContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

const ChevronContainer = styled.span<ChevronContainerProps>`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  transition: transform 0.3s;
  transform: rotate(${({ open }) => (open ? 180 : 0)}deg);
`;

export interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  withChevron?: boolean;
  open?: boolean;
  color?: LinkProps['color'];
  target?: LinkProps['target'];
}

const NavbarLink: FC<NavbarLinkProps> = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ active = false, children, open = false, withChevron = false, color = colors.actionPlain, ...rest }, ref) => (
    <StyledNavbarLink active={active} withChevron={withChevron} color={color} ref={ref} {...rest}>
      {children}
      {withChevron && (
        <ChevronContainer open={open}>
          <Icon variant={faChevronDown} />
        </ChevronContainer>
      )}
    </StyledNavbarLink>
  ),
);

export default NavbarLink;
