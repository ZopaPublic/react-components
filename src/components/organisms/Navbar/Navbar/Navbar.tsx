import React, { useState } from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import { spacing } from '../../../../constants/spacing';
import { navbarHeight, mobileNavbarHeight } from '../../../../constants/components';
import { useViewport } from '../../../../hooks/useViewport';
import navCurve from '../../../../content/images/nav-curve.svg';
import Logo from '../../../atoms/Logo/Logo';
import Icon from '../../../atoms/Icon/Icon';
import Navbar from '../';
export interface INavbarProps {
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

export type ILargeDeviceNavbar = Pick<INavbarProps, 'overlayLogoWith'>;

export interface IHamburgerContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

const PageNavigation = styled.header`
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${colors.brand};
    height: ${mobileNavbarHeight}px;

    @media (min-width: ${breakpoints.desktop}px) {
      background-color: ${colors.white};
      height: ${navbarHeight}px;
    }
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
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

  @media (min-width: ${breakpoints.desktop}px) {
    width: 490px;
    height: ${navbarHeight}px;
    background-image: ${`url(${navCurve})`};
    background-repeat: no-repeat;
    padding-left: ${spacing[10]};
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
  @media (min-width: ${breakpoints.desktop}px) {
    margin-right: ${spacing[10]};
  }
`;

const IconContainer = styled.span`
  display: flex;
  height: ${mobileNavbarHeight}px;
  width: ${mobileNavbarHeight}px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
`;

const HamburgerContainer = styled(IconContainer)<IHamburgerContainerProps>`
  background-color: ${({ open }) => (open ? colors.white : 'transparent')};
`;

const HamburgerMenu = styled.aside<IHamburgerContainerProps>`
  position: absolute;
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

const LargeDeviceNavbar: React.FC<ILargeDeviceNavbar> = ({ children, overlayLogoWith }) => {
  return (
    <>
      <LogoContainer>
        <Logo color={colors.brand} width="150px" negative />
        {overlayLogoWith}
      </LogoContainer>
      <NavbarLinksListContainer>{children}</NavbarLinksListContainer>
    </>
  );
};

const SmallDeviceNavbar: React.FC<INavbarProps> = ({ children, overlayLogoWith, withCTA, cta }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {children ? (
        <HamburgerContainer open={open} onClick={() => setOpen(!open)}>
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
    </>
  );
};

const NavbarWrapper: React.FC<INavbarProps> = ({
  children,
  overlayLogoWith = <a href={process.env.REACT_APP_ZOPA_LOGO_LINK || 'https://www.zopa.com'} />,
  withCTA = true,
  cta = <Navbar.Action />,
}) => {
  const { width } = useViewport();

  return (
    <PageNavigation role="banner">
      <Headroom disableInlineStyles>
        <LayoutInner>
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
        </LayoutInner>
      </Headroom>
    </PageNavigation>
  );
};

export default NavbarWrapper;
