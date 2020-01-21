import React, { FC } from 'react';
import styled from 'styled-components';
import grid from '../../../../constants/grid';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import ZopaLogo from '../../../icons/ZopaLogo/ZopaLogo';
import FooterLink from '../FooterLink/FooterLink';
import { colors } from '../../../../constants/colors';

export interface ISocialLinkData {
  component: React.FunctionComponent<{ size?: string }>;
  href: string;
  label: string;
}

export interface ISocialLinkProps {
  /**
   * Define the Url for the logo
   */
  logoUrl?: string;
}

const SFlexRow = styled(FlexRow)`
  justify-content: center;
  margin-top: 32px;

  @media (min-width: ${grid.breakpoints.s}px) {
    margin-top: 0;
  }

  @media (min-width: ${grid.breakpoints.m}px) {
    justify-content: flex-end;
  }
`;

const SFooterLink = styled(FooterLink)`
  margin-left: 8px;
  margin-right: 8px;
`;

const LogoLink = styled(FooterLink)`
  display: flex;
  justify-content: center;

  > svg {
    max-width: 200px;
  }
`;

const socialLinksData: ISocialLinkData[] = [
  {
    component: function InstagramIcon() {
      return (
        <svg
          role="img"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          height="30px"
          width="30px"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="2.8" />
          <path d="M18.6 7c-.2-.4-.3-.7-.6-1s-.6-.5-1-.6c-.3-.1-.7-.3-1.6-.3H8.6c-.9 0-1.3.2-1.6.3-.4.1-.7.3-1 .6s-.5.6-.6 1c-.1.3-.3.7-.3 1.6C5 9.5 5 9.7 5 12v3.4c0 .8.2 1.3.3 1.6.2.4.3.7.6 1s.6.5 1 .6c.3.1.7.3 1.6.3h6.8c.8 0 1.3-.2 1.6-.3.4-.2.7-.3 1-.6s.5-.6.6-1c.1-.3.3-.7.3-1.6V8.6c.1-.9-.1-1.3-.2-1.6zM12 16.4c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4zm4.5-7.9c-.6 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .5 1 1 .1.5-.4 1-1 1z" />
          <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm1.4 15.5c0 .9-.2 1.5-.4 2.1-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.2.4-2.1.4-.9 0-1.2.1-3.5.1s-2.6 0-3.5-.1c-.9 0-1.5-.2-2.1-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.2-.4-2.1 0-.9-.1-1.2-.1-3.5s0-2.6.1-3.5c0-.9.2-1.5.4-2.1.2-.6.5-1 1-1.5s.9-.8 1.5-1c.7-.2 1.3-.3 2.2-.3.9 0 1.2-.1 3.5-.1s2.6 0 3.5.1c.9 0 1.5.2 2.1.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.2.4 2.1 0 .9.1 1.2.1 3.5s-.1 2.5-.2 3.4z" />
        </svg>
      );
    },
    href: 'https://www.instagram.com/Zopamoney/',
    label: 'instagram',
  },
  {
    component: function FacebookIcon() {
      return (
        <svg
          role="img"
          width="30px"
          height="30px"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <path
            d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-3 7h-1.924C13.461 7 13 7.252 13 7.889V9h3l-.238 3H13v8h-3v-8H8V9h2V7.077C10 5.055 11.064 4 13.461 4H16v3z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      );
    },
    href: 'https://facebook.com/zopa',
    label: 'facebook',
  },
  {
    component: function TwitterIcon() {
      return (
        <svg
          role="img"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          height="30px"
          width="30px"
          viewBox="0 0 24 24"
        >
          <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765a9.286 9.286 0 0 1-5.032-1.475 6.605 6.605 0 0 0 4.86-1.359 3.285 3.285 0 0 1-3.066-2.28 3.3 3.3 0 0 0 1.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 3.289 0 0 1 5.612 6.6a9.32 9.32 0 0 0 6.766 3.43 3.286 3.286 0 0 1 5.594-2.993 6.583 6.583 0 0 0 2.086-.796 3.296 3.296 0 0 1-1.443 1.816A6.578 6.578 0 0 0 20.5 7.54a6.66 6.66 0 0 1-1.639 1.697z" />
        </svg>
      );
    },
    href: 'https://twitter.com/zopa',
    label: 'twitter',
  },
];

const SocialLinks: FC<ISocialLinkProps> = ({ logoUrl = 'https://www.zopa.com' }) => (
  <FlexRow justify="space-between">
    <FlexCol xs={12} s={6} m={4} l={2}>
      <LogoLink href={logoUrl}>
        <ZopaLogo color={colors.neutral.white} />
      </LogoLink>
    </FlexCol>
    <FlexCol xs={12} s={6} m={4} l={3}>
      <SFlexRow>
        {socialLinksData.map(({ component: Component, label, href }) => (
          <SFooterLink href={href} aria-label={label} key={`footer-social-link-${href}`}>
            <Component />
          </SFooterLink>
        ))}
      </SFlexRow>
    </FlexCol>
  </FlexRow>
);

export default SocialLinks;
