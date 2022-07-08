import React from 'react';
import styled, { css } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { colors, spacing, typography } from '../../../../constants';
import { minMedia, maxEqualToMedia } from '../../../../helpers/responsiveness';

import Link, { LinkProps } from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';

export interface NavbarLinkStyleProps {
  active?: boolean;
  withChevron?: boolean;
  isDropdownLink?: boolean;
  isDropdownHeading?: boolean;
}

export interface NavbarLinkProps extends NavbarLinkStyleProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  open?: boolean;
  target?: LinkProps['target'];
  'data-automation'?: string;
}

export type StyledNavbarLinkProps = Required<NavbarLinkStyleProps>;

export interface ChevronContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

export const navbarLinkStyles = css<StyledNavbarLinkProps>`
  align-items: center;
  text-decoration: none;
  font-weight: ${typography.weights.semiBold};
  color: ${colors.actionPlain};

  display: inline-flex;
  padding: ${spacing[3]} ${spacing[4]} ${spacing[4]};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px 0px ${colors.actionPlain};
    border-radius: 4px;
  }

  &:active,
  &:hover {
    color: ${colors.actionDark};
    opacity: ${({ active }) => (active ? 1 : 0.88)};
  }


  ${maxEqualToMedia.desktop`
    width: 100%;

    ${({ withChevron }: StyledNavbarLinkProps) =>
      withChevron &&
      `
        color: ${colors.greyDarkest};
        font-size: ${typography.sizes.text.small};
        font-weight: ${typography.weights.bold};
        text-transform: uppercase;
      `}
  `}

  ${minMedia.desktop`
    ${({ isDropdownLink, isDropdownHeading }: StyledNavbarLinkProps) =>
      isDropdownLink &&
      !isDropdownHeading &&
      css`
        padding: ${spacing[3]} ${spacing[2]};
        width: calc(100% - 16px);
        margin-left: 8px;
        margin-right: 8px;

        border-radius: 8px;

        &:hover {
          background-color: ${colors.actionLight};
        }
      `}
  `}

  ${({ isDropdownHeading }: StyledNavbarLinkProps) =>
    isDropdownHeading &&
    css`
      margin-top: ${spacing[2]};
      width: 100%;

      color: ${colors.greyDarkest};
      text-transform: uppercase;
      font-weight: 400;
      font-size: ${typography.sizes.text.small};

      border-top: 1px solid ${colors.greyLight};
      border-radius: 0px;
      outline: none;
      pointer-events: none;

      &:hover {
        cursor: default;
      }
    `}
`;

const StyledNavbarLink = styled(Link)<StyledNavbarLinkProps>`
  ${navbarLinkStyles}
`;

const LinkContainer = styled.span`
  display: inline-flex;
  margin-right: ${spacing[2]};
`;

const ChevronContainer = styled.span<ChevronContainerProps>`
  display: none;

  ${minMedia.desktop`
    display: inline-flex;
    align-items: center;
    font-size: 12px;

    transition: transform 0.3s;
    ${({ open }: ChevronContainerProps) => (open ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)')}
  `}
`;

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  (
    {
      active = false,
      children,
      open = false,
      withChevron = false,
      isDropdownLink = false,
      isDropdownHeading = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledNavbarLink
        active={active}
        withChevron={withChevron}
        isDropdownLink={isDropdownLink}
        isDropdownHeading={isDropdownHeading}
        ref={ref}
        data-automation="ZA.navbar-item"
        {...rest}
      >
        {withChevron ? <LinkContainer>{children}</LinkContainer> : children}
        {withChevron && (
          <ChevronContainer open={open}>
            <Icon variant={faChevronDown} color={colors.grey} height="12px" width="12px" />
          </ChevronContainer>
        )}
      </StyledNavbarLink>
    );
  },
);

export default NavbarLink;
