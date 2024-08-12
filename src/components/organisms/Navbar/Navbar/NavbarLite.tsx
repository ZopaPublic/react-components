import React, { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import Headroom from 'react-headroom';

import { colors, navbarOpenHeight, navbarClosedHeight, mobileNavbarHeight, spacing } from '../../../../constants';
import { maxMedia, minMedia } from '../../../../helpers/responsiveness';
import useScrollThreshold from '../useScrollThreshold/useScrollThreshold';
import { NavbarLinkProps } from '../NavbarLink/NavbarLink';
import Button from '../../../atoms/Button/Button';
import { AppThemeProps, useThemeContext } from '../../../styles/Theme';
import { ConditionalWrapper } from '../../../atoms/ConditionalWrapper/ConditionalWrapper';

export interface NavigationItem {
  label: React.ReactNode;
  href?: string;
  'data-automation'?: string;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement>) => void;
  isDropdownHeading?: boolean;
  children?: Exclude<NavigationItem, 'children'>[];
}
export interface NavbarLinksListProps {
  /**
   * Array of links
   */
  links?: NavigationItem[];
  /**
   * Link component
   */
  renderLink?: (item: NavigationItem, index: number, props?: any) => React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface NavbarProps extends Omit<NavbarLinksListProps, 'setOpen'> {
  /**
   * allows you to overlay the logo with a button or link
   */
  overlayLogoWith?: React.ReactNode;
  /**
   * flag to display CTA
   */
  withCTA?: boolean;
  /**
   * CTA component
   */
  cta?: React.ReactNode;
  /**
   * Displayed scrolled styling
   */
  collapsed?: boolean;
}

export interface HamburgerContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

export interface PageNavigationProps extends AppThemeProps {
  overlap?: boolean;
  collapsed?: boolean;
}

export interface NavbarLinksListLinkProps {
  item: NavigationItem;
  index: number;
  props: NavbarLinkProps;
}

const PageNavigation = styled.header<PageNavigationProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  ${minMedia.desktop`
    ${css`
      z-index: 1;
      background-color: ${colors.white};
      max-height: ${navbarOpenHeight}px;

      transition: max-height 0.3s ease;

      ${({ collapsed }: PageNavigationProps) =>
        collapsed &&
        css`
          max-height: ${navbarClosedHeight}px;
        `}

      ${({ overlap }: PageNavigationProps) =>
        overlap &&
        css`
          max-height: ${navbarClosedHeight}px;
        `}
    `}
  `}

  .headroom {
    z-index: 1;
    background-color: ${({ theme }) => theme.navbar.mobile.bgColor};
    transition: transform 200ms ease-in-out;

    ${minMedia.desktop`
        ${css`
          background-color: ${colors.white};
        `}
      `}
  }
  .headroom--unfixed {
    transform: translateY(0);
  }

  .headroom--unpinned {
    transform: translateY(-100%);
  }
  .headroom--pinned {
    transform: translateY(0%);
  }
`;

const Spacer = styled.div<PageNavigationProps>`
  height: ${mobileNavbarHeight}px;

  ${minMedia.desktop`
    ${css`
      height: ${({ collapsed }: PageNavigationProps) => (collapsed ? navbarClosedHeight : navbarOpenHeight)}px;
    `}
  `}
`;

const LayoutInner = styled.nav<PageNavigationProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ theme }: PageNavigationProps) => theme.navbar.layoutInner?.justifyContent ?? 'space-between'};
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;

  ${minMedia.desktop`
    ${css`
      box-shadow: none;

      ${({ overlap }: PageNavigationProps) =>
        overlap &&
        css`
          box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;
        `}
    `}
  `}
`;

// TODO: We have to manually type the theme, I suspect this is because we're using outdated typings
// The generic passed does not actually get passed and the generic theme from styled-components is used instead
// This should be fixed in the future
export const LogoContainer = styled.div<PageNavigationProps>`
  position: relative;
  min-height: ${({ theme }) => theme.navbar.mobile.minHeight}px;
  ${minMedia.desktop`
    ${css`
      display: flex;
      align-items: center;
      width: 490px;
      transition: 0.3s min-height ease;
      min-height: ${({ overlap }: PageNavigationProps) => (overlap ? navbarClosedHeight : navbarOpenHeight)}px;
      padding-left: ${({ theme }: PageNavigationProps) =>
        theme.navbar.logoContainer?.desktopMinMedia.paddingLeft ?? spacing[10]};
      height: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.desktopMinMedia.height};
      width: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.desktopMinMedia.width};
      justify-content: ${({ theme }: PageNavigationProps) =>
        theme.navbar.logoContainer?.desktopMinMedia.justifyContent};
    `}
  `}

  ${maxMedia.desktop`
    ${css`
      display: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.desktopMaxMedia.display};
      align-items: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.desktopMaxMedia.alignItems};
    `}
  `}

  }

  & > a,
  & > button,
  & > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const NavbarLinksListContainer = styled.ul`
  ${minMedia.desktop`
    ${css`
      margin-right: ${spacing[10]};
      padding-left: 0;
    `}
  `}
`;

const IconContainer = styled(Button).attrs({ 'aria-label': 'Navigation' })`
  background: transparent;
  display: ${({ theme }) => theme.navbar.iconContainer.display};
  height: ${mobileNavbarHeight}px;
  width: ${mobileNavbarHeight}px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 0;
`;

const LargeDeviceNavbar = styled.div`
  display: none;

  ${minMedia.desktop`
    ${`
      display:block;
    `}
  `}
`;

const SmallDeviceNavbar = styled.div`
  display: block;

  ${minMedia.desktop`
    ${`
      display:none;
    `}
  `}
`;

const NavbarLiteWrapper = ({ collapsed = false }: React.PropsWithChildren<NavbarProps>) => {
  const overThreshold = useScrollThreshold(20);
  const theme = useThemeContext();

  return (
    <>
      <PageNavigation overlap={overThreshold} collapsed={collapsed} theme={theme}>
        <ConditionalWrapper
          condition={typeof theme.navbar.href !== 'undefined'}
          wrapper={(children) => <a href={theme?.navbar?.href}>{children}</a>}
        >
          <Headroom
            wrapperStyle={{ maxHeight: overThreshold ? `${navbarClosedHeight}px` : `${navbarOpenHeight}px` }}
            disableInlineStyles
          >
            <LargeDeviceNavbar>
              <LayoutInner data-automation="ZA.navbar-desktop" overlap={overThreshold} theme={theme}></LayoutInner>
            </LargeDeviceNavbar>
            <SmallDeviceNavbar>
              <LayoutInner data-automation="ZA.navbar-mobile" overlap={overThreshold} theme={theme}></LayoutInner>
            </SmallDeviceNavbar>
          </Headroom>
        </ConditionalWrapper>
      </PageNavigation>
      <Spacer collapsed={collapsed} />
    </>
  );
};

export default NavbarLiteWrapper;
