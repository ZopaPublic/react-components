import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
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
import { maxMedia, minMedia } from '../../../../helpers/responsiveness';
import { useViewport } from '../../../../hooks/useViewport';
import navCurve from '../../../../content/images/nav-curve.svg';
import Logo from '../../../atoms/Logo/Logo';
import Icon from '../../../atoms/Icon/Icon';
import useScrollThreshold from '../useScrollThreshold/useScrollThreshold';
import NavbarLink, { NavbarLinkProps } from '../NavbarLink/NavbarLink';
import NavbarAction from '../NavbarAction/NavbarAction';
import NavbarLinksList from '../NavbarLinksList/NavbarLinksList';
import Button from '../../../atoms/Button/Button';
import { AppThemeProps, useThemeContext } from '../../../styles/Theme';

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
        theme.navbar.logoContainer?.desktop.paddingLeft ?? spacing[10]};
      height: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.desktop.height};
      width: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.desktop.width};
      justify-content: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.desktop.justifyContent};
    `}
  `}

  ${maxMedia.desktop`
    ${css`
      display: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.medium.display};
      align-items: ${({ theme }: PageNavigationProps) => theme.navbar.logoContainer?.medium.alignItems};
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

const HamburgerContainer = styled(IconContainer)<HamburgerContainerProps>`
  background: ${({ open }) => (open ? colors.white : 'transparent')};
  &:hover:not(:disabled) {
    background: ${({ open }) => (open ? colors.white : 'transparent')};
  }
`;

const HamburgerMenu = styled.div<{ open: boolean; height: number }>`
  position: fixed;
  right: 0;
  top: ${mobileNavbarHeight}px;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  min-height: ${({ height }) => `${height - mobileNavbarHeight}px`};
  width: 100%;
  padding: ${spacing[8]} ${spacing[4]} ${spacing[10]};

  background: ${colors.white};

  transition: transform 0.25s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 2;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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

const NavItemsWrapper = styled.ul`
  padding-left: 0;

  > li {
    display: block;
  }
`;

const ActionWrapper = styled.li`
  list-style: none;
  display: inline;
`;

export const NavbarLinksListLink = ({ item: { label, ...rest }, index, props }: NavbarLinksListLinkProps) => (
  <NavbarLink key={`navbar-link-${index}`} {...rest} {...props}>
    {label}
  </NavbarLink>
);

const NavbarWrapper = ({
  links,
  renderLink = (item: NavigationItem, index: number, props) => (
    <NavbarLinksListLink item={item} index={index} props={props} />
  ),
  overlayLogoWith,
  withCTA = true,
  cta = <NavbarAction />,
  collapsed = false,
}: React.PropsWithChildren<NavbarProps>) => {
  const { width } = useViewport();
  const overThreshold = useScrollThreshold(20);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const theme = useThemeContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.top = `-${window.scrollY}px`;
      document.documentElement.classList.add('nav-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.top = '';
      document.documentElement.classList.remove('nav-open');
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  const onResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <PageNavigation overlap={overThreshold} collapsed={collapsed} theme={theme}>
        <Headroom
          wrapperStyle={{ maxHeight: overThreshold ? `${navbarClosedHeight}px` : `${navbarOpenHeight}px` }}
          disableInlineStyles
          disable={isOpen || !!(width && width >= breakpoints.desktop)}
        >
          <LargeDeviceNavbar>
            <LayoutInner data-automation="ZA.navbar-desktop" overlap={overThreshold} theme={theme}>
              <LogoContainer overlap={overThreshold || collapsed} role="banner" theme={theme}>
                {theme.navbar.logo.render ? <Logo negative={!overThreshold && !collapsed} width="150px" /> : null}
                {overlayLogoWith}
              </LogoContainer>
              <NavbarLinksListContainer>
                {links ? <NavbarLinksList links={links} renderLink={renderLink} setOpen={setIsOpen} /> : null}
                {withCTA ? <ActionWrapper>{cta}</ActionWrapper> : null}
              </NavbarLinksListContainer>
            </LayoutInner>
          </LargeDeviceNavbar>
          <SmallDeviceNavbar>
            <LayoutInner data-automation="ZA.navbar-mobile" overlap={overThreshold} theme={theme}>
              {links ? (
                <HamburgerContainer
                  open={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                  data-automation="hamburger-icon"
                  theme={theme}
                >
                  <Icon
                    variant={faBars}
                    color={isOpen ? colors.brandDecorative : colors.white}
                    width="20px"
                    height="20px"
                    size="1x"
                  />
                </HamburgerContainer>
              ) : (
                <IconContainer className="icon-container" theme={theme} />
              )}
              <LogoContainer theme={theme}>
                {theme.navbar.logo.render ? <Logo color={colors.brandDecorative} height="20px" negative /> : null}
                {overlayLogoWith}
              </LogoContainer>
              {withCTA ? cta : <IconContainer theme={theme} />}
              {links && isOpen ? (
                <HamburgerMenu open={isOpen} height={height}>
                  <NavItemsWrapper>
                    <NavbarLinksList links={links} renderLink={renderLink} setOpen={setIsOpen} />
                  </NavItemsWrapper>
                </HamburgerMenu>
              ) : null}
            </LayoutInner>
          </SmallDeviceNavbar>
        </Headroom>
      </PageNavigation>
      <Spacer collapsed={collapsed} />
    </>
  );
};

export default NavbarWrapper;
