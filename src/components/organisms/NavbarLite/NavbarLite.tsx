import React from 'react';
import styled, { css } from 'styled-components';
import Headroom from 'react-headroom';

import { colors, navbarOpenHeight, navbarClosedHeight, mobileNavbarHeight, breakpoints } from '../../../constants';
import { minMedia } from '../../../helpers/responsiveness';
import useScrollThreshold from '../Navbar/useScrollThreshold/useScrollThreshold';
import { AppThemeProps, useThemeContext } from '../../styles/Theme';
import { ConditionalWrapper } from '../../atoms/ConditionalWrapper/ConditionalWrapper';
import { useViewport } from '../../../hooks/useViewport';
import Logo from '../../atoms/Logo/Logo';

export interface NavbarProps {
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
   * Show the zopa logo on the right and the parnter logo on the left
   * @default false
   */
  isCobranded?: boolean;

  containerClassName?: string;
}

export interface PageNavigationProps extends AppThemeProps {
  overlap?: boolean;
  collapsed?: boolean;
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

const CenteredContainer = styled.div<AppThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CobrandedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 24px; // Add horizontal padding
`;

const LeftLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const RightLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LogoRenderer = ({ children, isCobranded, containerClassName }: React.PropsWithChildren<NavbarProps>) => {
  if (!isCobranded) {
    return (
      <CenteredContainer className={containerClassName}>
        <LogoWrapper>{children}</LogoWrapper>
      </CenteredContainer>
    );
  }

  return (
    <CobrandedContainer className={containerClassName}>
      <LeftLogoWrapper>{children}</LeftLogoWrapper>
      <RightLogoWrapper>
        <Logo width="100px" />
      </RightLogoWrapper>
    </CobrandedContainer>
  );
};

const NavbarLiteWrapper = ({ children, isCobranded }: React.PropsWithChildren<NavbarProps>) => {
  const { width } = useViewport();
  const overThreshold = useScrollThreshold(20);
  const theme = useThemeContext();

  return (
    <>
      <PageNavigation overlap={overThreshold} collapsed theme={theme}>
        <ConditionalWrapper
          condition={typeof theme.navbar.href !== 'undefined'}
          wrapper={(children) => (
            <a href={theme?.navbar?.href} target="_blank" title="Link opens in a new tab" rel="noreferrer">
              {children}
            </a>
          )}
        >
          <Headroom
            wrapperStyle={{ maxHeight: overThreshold ? `${navbarClosedHeight}px` : `${navbarOpenHeight}px` }}
            disableInlineStyles
            disable={!!(width && width >= breakpoints.desktop)}
          >
            <LargeDeviceNavbar>
              <LayoutInner data-automation="ZA.navbar-desktop" overlap={overThreshold} theme={theme}>
                <LogoRenderer isCobranded={isCobranded} containerClassName={theme.navbar.containerClassName}>
                  {children}
                </LogoRenderer>
              </LayoutInner>
            </LargeDeviceNavbar>
            <SmallDeviceNavbar>
              <LayoutInner data-automation="ZA.navbar-mobile" overlap={overThreshold} theme={theme}>
                <LogoRenderer isCobranded={isCobranded} containerClassName={theme.navbar.containerClassName}>
                  {children}
                </LogoRenderer>
              </LayoutInner>
            </SmallDeviceNavbar>
          </Headroom>
        </ConditionalWrapper>
      </PageNavigation>
      <Spacer collapsed />
    </>
  );
};

export default NavbarLiteWrapper;
