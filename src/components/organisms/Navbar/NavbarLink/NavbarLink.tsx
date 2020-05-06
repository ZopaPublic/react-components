import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import Link, { ILinkProps } from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export interface IStyledNavbarLinkProps extends ILinkProps {
  active: boolean;
  withChevron: boolean;
}

const StyledNavbarLink = styled(Link)<IStyledNavbarLinkProps>`
  display: inline-flex;
  align-items: center;
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
  active?: boolean;
  withChevron?: boolean;
  open?: boolean;
  color?: ILinkProps['color'];
  target?: ILinkProps['target'];
}

const NavbarLink: FC<INavbarLinkProps> = React.forwardRef<HTMLAnchorElement, INavbarLinkProps>(
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
