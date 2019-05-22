import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../../constants/colors';
import Chevron from '../../../icons/Chevron/Chevron';

export interface IStyledNavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active: boolean;
  color: string;
  withChevron: boolean;
}

const StyledNavbarLink = styled.a<IStyledNavbarLinkProps>`
  appearance: none;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  color: ${({ color }) => color};
  &:active,
  &:hover {
    opacity: ${({ active }) => (active ? 1 : 0.88)};
  }
`;

export interface IChevronContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

const ChevronContainer = styled.span<IChevronContainerProps>`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  transition: transform 0.3s;
  transform: rotate(${({ open }) => (open ? 180 : 0)}deg);
`;

export interface INavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Indicates whether the current route corresponds with the links href
   * @default false
   */
  active?: boolean;
  /**
   * Determines whether the Chevron icon is shown on the side
   * @default false
   */
  withChevron?: boolean;
  /**
   * @default false
   */
  open?: boolean;
}

const NavbarLink: React.FunctionComponent<INavbarLinkProps> = React.forwardRef(
  ({ active = false, children, open = false, withChevron = false, color = colors.primary.blue500, ...rest }, ref) => (
    <StyledNavbarLink active={active} withChevron={withChevron} color={color} ref={ref} {...rest}>
      {children}
      {withChevron && (
        <ChevronContainer open={open}>
          <Chevron color="currentcolor" width="18px" height="18px" />
        </ChevronContainer>
      )}
    </StyledNavbarLink>
  ),
);

export default NavbarLink;
