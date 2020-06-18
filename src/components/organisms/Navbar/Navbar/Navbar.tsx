import React, { useState, useEffect } from 'react';
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
  /**
   * Displayed scrolled styling
   */
  collapsed?: boolean;
}

export interface HamburgerContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

export interface PageNavigationProps {
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
  justify-content: space-between;
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

const HamburgerMenu = styled.aside<{ open: boolean; height: number }>`
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

export const NavbarLinksListLink = ({ item: { label, ...rest }, index, props }: NavbarLinksListLinkProps) => (
  <NavbarLink key={`navbar-link-${index}`} {...props} {...rest}>
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
  collapsed = false,
}) => {
  const { width } = useViewport();
  const overThreshold = useScrollThreshold(20);
  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open) {
      document.body.style.top = `-${window.scrollY}px`;
      document.documentElement.classList.add('nav-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.top = '';
      document.documentElement.classList.remove('nav-open');
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [open]);

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
      <PageNavigation role="banner" overlap={overThreshold} collapsed={collapsed}>
        <Headroom disableInlineStyles disable={open || !!(width && width >= breakpoints.desktop)}>
          <LargeDeviceNavbar>
            <LayoutInner overlap={overThreshold}>
              <LogoContainer overlap={overThreshold || collapsed}>
                <Logo negative={!overThreshold && !collapsed} width="150px" />
                {overlayLogoWith}
              </LogoContainer>
              <NavbarLinksListContainer>
                <NavbarLinksList links={links} renderLink={renderLink} />
                {withCTA && cta}
              </NavbarLinksListContainer>
            </LayoutInner>
          </LargeDeviceNavbar>
          <SmallDeviceNavbar>
            <LayoutInner overlap={overThreshold}>
              {links ? (
                <HamburgerContainer open={open} onClick={() => setOpen(!open)} data-testid="hamburger-icon">
                  <Icon
                    variant={faBars}
                    color={open ? colors.brand : colors.white}
                    width="20px"
                    height="20px"
                    size="1x"
                  />
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
                <HamburgerMenu open={open} height={height}>
                  <NavbarLinksList links={links} renderLink={renderLink} />
                </HamburgerMenu>
              )}
            </LayoutInner>
          </SmallDeviceNavbar>
        </Headroom>
      </PageNavigation>
      <Spacer collapsed={collapsed} />
    </>
  );
};

export default NavbarWrapper;
