import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../../../constants/colors';
import { spacing } from '../../../../constants/spacing';
import { typography } from '../../../../constants/typography';
import { minMedia, maxMedia } from '../../../../helpers/responsiveness';

import Link, { ILinkProps } from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';

export interface INavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  withChevron?: boolean;
  isDropdownLink?: boolean;
  open?: boolean;
  target?: ILinkProps['target'];
}

export interface IStyledNavbarLinkProps extends ILinkProps {
  active: boolean;
  withChevron: boolean;
  isDropdownLink: boolean;
}

export interface IChevronContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

const StyledNavbarLink = styled(Link)<IStyledNavbarLinkProps>`
  align-items: center;
  text-decoration: none;

  display: inline-flex;
  padding: ${spacing[3]} ${spacing[4]} ${spacing[4]};

  &:active,
  &:hover {
    opacity: ${({ active }) => (active ? 1 : 0.88)};
  }

  ${maxMedia.desktop`
    ${({ withChevron }: IStyledNavbarLinkProps) =>
      withChevron &&
      css`
        color: ${colors.greyDarkest};
        font-size: ${typography.sizes.text.small};
        font-weight: ${typography.weights.bold};
        text-transform: uppercase;
      `}
  `}

  ${minMedia.desktop`
    ${({ isDropdownLink }: IStyledNavbarLinkProps) =>
      isDropdownLink &&
      css`
        padding: ${spacing[3]};
        border-radius: 8px;
        width: 100%;

        &:hover {
          background-color: ${colors.actionLight};
        }
      `}
  `}
`;

const LinkContainer = styled.span`
  display: inline-flex;
  margin-right: ${spacing[2]};
`;

const ChevronContainer = styled.span<IChevronContainerProps>`
  display: none;

  ${minMedia.desktop`
    display: inline-flex;
    align-items: center;
    font-size: 12px;

    transition: transform 0.3s;
    ${({ open }: IChevronContainerProps) => (open ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)')}
  `}
`;

const NavbarLink: FC<INavbarLinkProps> = React.forwardRef<HTMLAnchorElement, INavbarLinkProps>(
  ({ active = false, children, open = false, withChevron = false, isDropdownLink = false, ...rest }, ref) => (
    <StyledNavbarLink active={active} withChevron={withChevron} isDropdownLink={isDropdownLink} ref={ref} {...rest}>
      {withChevron ? <LinkContainer>{children}</LinkContainer> : children}
      {withChevron && (
        <ChevronContainer open={open}>
          <Icon variant={faChevronDown} color={colors.grey} fixedWidth />
        </ChevronContainer>
      )}
    </StyledNavbarLink>
  ),
);

export default NavbarLink;
