import React from 'react';

import Facebook from '../../../icons/Facebook/Facebook';
import Twitter from '../../../icons/Twitter/Twitter';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FooterLink from '../FooterLink/FooterLink';

export interface ISocialLinkData {
  component: React.FunctionComponent<{ size?: string }>;
  href: string;
  label: string;
}

const socialLinksData: ISocialLinkData[] = [
  {
    component: Twitter,
    href: 'https://twitter.com/zopa',
    label: 'twitter',
  },
  {
    component: Facebook,
    href: 'https://facebook.com/zopa',
    label: 'facebook',
  },
];

const SocialLinks = () => (
  <FlexRow>
    {socialLinksData.map(({ component: Component, label, href }, index) => (
      <FlexCol xs="auto" key={`footer-social-link-${index}`}>
        <FooterLink href={href} aria-label={label}>
          <Component size="30px" />
        </FooterLink>
      </FlexCol>
    ))}
  </FlexRow>
);

export default SocialLinks;
