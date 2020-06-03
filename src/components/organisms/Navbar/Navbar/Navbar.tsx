import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Headroom from 'react-headroom';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  colors,
  navbarOpenHeight,
  navbarClosedHeight,
  mobileNavbarHeight,
  breakpoints,
  spacing,
} from '../../../../constants';
import { minMedia } from '../../../../helpers/responsiveness';
import { useViewport } from '../../../../hooks/useViewport';
import navCurve from '../../../../content/images/nav-curve.svg';
import Logo from '../../../atoms/Logo/Logo';
import Icon from '../../../atoms/Icon/Icon';
import useScrollThreshold from '../useScrollThreshold/useScrollThreshold';
import NavbarLink, { NavbarLinkProps } from '../NavbarLink/NavbarLink';
import NavbarAction from '../NavbarAction/NavbarAction';
import NavbarLinksList from '../NavbarLinksList/NavbarLinksList';

export interface NavigationItem {
  label: string;
  href?: string;
  'data-automation'?: string;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: NavigationItem[];
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
}

export interface NavbarProps extends NavbarLinksListProps {
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
}

export interface HamburgerContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

export interface PageNavigationProps {
  overlap?: boolean;
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

  ${minMedia.desktop`
    ${css`
      z-index: 1;
      background-color: ${colors.white};
      max-height: ${navbarOpenHeight}px;

      transition: max-height 0.3s ease;

      ${({ overlap }: PageNavigationProps) =>
        overlap &&
        css`
          box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;
          max-height: ${navbarClosedHeight}px;
        `}
    `}
  `}

  .headroom {
    z-index: 1;
    background-color: ${colors.brand};
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

const Spacer = styled.div`
  height: ${mobileNavbarHeight}px;

  ${minMedia.desktop`
    ${css`
      height: ${navbarOpenHeight}px;
    `}
  `}
`;

const LayoutInner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const LogoContainer = styled.div<PageNavigationProps>`
  position: relative;

  ${minMedia.desktop`
    ${css`
      display: flex;
      align-items: center;
      width: 490px;
      transition: 0.3s min-height ease;
      min-height: ${({ overlap }: PageNavigationProps) => (overlap ? navbarClosedHeight : navbarOpenHeight)}px;
      padding-left: ${spacing[10]};
    `}
  `}

  &:before {
    ${minMedia.desktop`
    ${css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      transition: opacity 0.3s ease;

      background-image: ${`url(${navCurve})`};
      background-repeat: no-repeat;
      opacity: ${({ overlap }: PageNavigationProps) => (overlap ? 0 : 1)};

      content: '';
      z-index: -1;
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

const NavbarLinksListContainer = styled.div`
  ${minMedia.desktop`
    ${css`
      margin-right: ${spacing[10]};
    `}
  `}
`;

const IconContainer = styled.span`
  display: flex;
  height: ${mobileNavbarHeight}px;
  width: ${mobileNavbarHeight}px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
`;

const HamburgerContainer = styled(IconContainer)<HamburgerContainerProps>`
  background-color: ${({ open }) => (open ? colors.white : 'transparent')};
`;

const HamburgerMenu = styled.aside<HamburgerContainerProps>`
  position: fixed;
  right: 0;
  top: ${mobileNavbarHeight}px;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: ${spacing[8]} ${spacing[4]} 0;

  background: ${colors.white};

  transition: transform 0.25s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 2;
  overflow-y: auto;
`;

export const NavbarLinksListLink = ({
  item: { label, href, onClick, ...rest },
  index,
  props,
}: NavbarLinksListLinkProps) => (
  <NavbarLink key={`navbar-link-${index}`} href={href} onClick={onClick} {...props} {...rest}>
    {label}
  </NavbarLink>
);

const NavbarWrapper: React.FC<NavbarProps> = ({
  links,
  renderLink = (item: NavigationItem, index: number, props) => (
    <NavbarLinksListLink item={item} index={index} props={props} />
  ),
  overlayLogoWith,
  withCTA = true,
  cta = <NavbarAction />,
}) => {
  const { width } = useViewport();
  const overThreshold = useScrollThreshold(navbarOpenHeight);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <PageNavigation role="banner" overlap={overThreshold}>
        <Headroom disableInlineStyles disable={open || !!(width && width >= breakpoints.desktop)}>
          {width && width >= breakpoints.desktop ? (
            <LayoutInner>
              <LogoContainer overlap={overThreshold}>
                <Logo negative={!overThreshold} width="150px" />
                {overlayLogoWith}
              </LogoContainer>
              <NavbarLinksListContainer>
                <NavbarLinksList links={links} renderLink={renderLink} />
                {withCTA && cta}
              </NavbarLinksListContainer>
            </LayoutInner>
          ) : (
            <LayoutInner>
              {links ? (
                <HamburgerContainer open={open} onClick={() => setOpen(!open)} data-testid="hamburger-icon">
                  <Icon variant={faBars} color={open ? colors.brand : colors.white} fixedWidth />
                </HamburgerContainer>
              ) : (
                <IconContainer />
              )}
              <LogoContainer>
                <Logo color={colors.brand} height="20px" negative />
                {overlayLogoWith}
              </LogoContainer>
              {withCTA ? cta : <IconContainer />}
              {links && (
                <HamburgerMenu open={open}>
                  <NavbarLinksList links={links} renderLink={renderLink} />
                </HamburgerMenu>
              )}
            </LayoutInner>
          )}
        </Headroom>
      </PageNavigation>
      <Spacer />
    </>
  );
};

export default NavbarWrapper;
