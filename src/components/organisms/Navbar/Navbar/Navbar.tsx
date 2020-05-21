import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Headroom from 'react-headroom';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import { minMedia } from '../../../../helpers/responsiveness';
import { spacing } from '../../../../constants/spacing';
import { navbarHeight, mobileNavbarHeight } from '../../../../constants/components';
import { useViewport } from '../../../../hooks/useViewport';
import navCurve from '../../../../content/images/nav-curve.svg';
import Logo from '../../../atoms/Logo/Logo';
import Icon from '../../../atoms/Icon/Icon';
import useScrollThreshold from '../useScrollThreshold/useScrollThreshold';
import Navbar from '../';

export interface NavbarProps {
  /**
   * allows you to overlay the logo with a button or link
   */
  overlayLogoWith?: React.ReactNode;
  /**
   * Display CTA
   */
  withCTA?: boolean;
  /**
   * CTA component
   */
  cta?: React.ReactNode;
}

export type LargeDeviceNavbar = Pick<NavbarProps, 'overlayLogoWith'>;

export interface HamburgerContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

export interface PageNavigationProps extends React.HTMLAttributes<HTMLHeadElement> {
  overlap: boolean;
}

const PageNavigation = styled.header<PageNavigationProps>`
  .headroom {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${colors.brand};
    height: ${mobileNavbarHeight}px;
    transition: transform 200ms ease-in-out;

    ${minMedia.desktop`
      ${css`
        background-color: ${colors.white};
        height: ${navbarHeight}px;

        ${({ overlap }: PageNavigationProps) => overlap && `box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;`}
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

const LayoutInner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const LogoContainer = styled.div`
  position: relative;

  ${minMedia.desktop`
    ${css`
      width: 490px;
      height: ${navbarHeight}px;
      background-image: ${`url(${navCurve})`};
      background-repeat: no-repeat;
      padding-left: ${spacing[10]};
    `}
  `}

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

const LargeDeviceNavbar: React.FC<LargeDeviceNavbar> = ({ children, overlayLogoWith }) => {
  return (
    <Headroom disableInlineStyles>
      <LayoutInner>
        <LogoContainer>
          <Logo color={colors.brand} width="150px" negative />
          {overlayLogoWith}
        </LogoContainer>
        <NavbarLinksListContainer>{children}</NavbarLinksListContainer>
      </LayoutInner>
    </Headroom>
  );
};

const SmallDeviceNavbar: React.FC<NavbarProps> = ({ children, overlayLogoWith, withCTA, cta }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Headroom disableInlineStyles disable={open}>
      <LayoutInner>
        {children ? (
          <HamburgerContainer open={open} onClick={() => setOpen(!open)} data-testid="hamburger-icon">
            <Icon variant={faBars} color={open ? colors.brand : colors.white} fixedWidth />
          </HamburgerContainer>
        ) : (
          <IconContainer />
        )}
        <LogoContainer>
          <Logo color={colors.brand} width="150px" negative />
          {overlayLogoWith}
        </LogoContainer>
        <IconContainer>{withCTA && cta}</IconContainer>
        {children && <HamburgerMenu open={open}>{children}</HamburgerMenu>}
      </LayoutInner>
    </Headroom>
  );
};

const NavbarWrapper: React.FC<NavbarProps> = ({
  children,
  overlayLogoWith = <a href="https://www.zopa.com" />,
  withCTA = true,
  cta = <Navbar.Action />,
}) => {
  const { width } = useViewport();
  const overThreshold = useScrollThreshold();

  return (
    <PageNavigation role="banner" overlap={overThreshold}>
      {width && width >= breakpoints.desktop ? (
        <LargeDeviceNavbar overlayLogoWith={overlayLogoWith}>
          {children}
          {withCTA && cta}
        </LargeDeviceNavbar>
      ) : (
        <SmallDeviceNavbar overlayLogoWith={overlayLogoWith} withCTA={withCTA} cta={cta}>
          {children}
        </SmallDeviceNavbar>
      )}
    </PageNavigation>
  );
};

export default NavbarWrapper;
