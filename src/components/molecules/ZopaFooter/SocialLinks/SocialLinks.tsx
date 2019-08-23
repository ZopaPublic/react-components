import React from 'react';
import styled from 'styled-components';

import Facebook from '../../../icons/Facebook/Facebook';
import Twitter from '../../../icons/Twitter/Twitter';
import Instagram from '../../../icons/Instagram/Instagram';
import ZopaLogo from '../../../icons/ZopaLogo/ZopaLogo';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FooterLink from '../FooterLink/FooterLink';

export interface ISocialLinkData {
  component: React.FunctionComponent<{ size?: string }>;
  href: string;
  label: string;
}

const SFlexRow = styled(FlexRow)`
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 32px;
  }
`;

const SFooterLink = styled(FooterLink)`
  margin-left: 8px;
  margin-right: 8px;
`;

const socialLinksData: ISocialLinkData[] = [
  {
    component: Instagram,
    href: 'https://www.instagram.com/Zopamoney/',
    label: 'instagram',
  },
  {
    component: Facebook,
    href: 'https://facebook.com/zopa',
    label: 'facebook',
  },
  {
    component: Twitter,
    href: 'https://twitter.com/zopa',
    label: 'twitter',
  },
];

const SocialLinks = () => (
  <FlexRow justify="space-between">
    <FlexCol xs={12} s={6} m={4} l={2}>
      <FooterLink href="https://www.zopa.com">
        <ZopaLogo />
      </FooterLink>
    </FlexCol>
    <FlexCol xs={12} s={6} m={4} l={3}>
      <SFlexRow justify="flex-end" gutter={8}>
        {socialLinksData.map(({ component: Component, label, href }, index) => (
          <SFooterLink href={href} aria-label={label} key={`footer-social-link-${index}`}>
            <Component size="30px" />
          </SFooterLink>
        ))}
      </SFlexRow>
    </FlexCol>
  </FlexRow>
);

export default SocialLinks;
