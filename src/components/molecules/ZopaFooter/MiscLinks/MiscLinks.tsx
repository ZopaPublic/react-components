import React from 'react';
import styled from 'styled-components';

import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FooterLink from '../FooterLink/FooterLink';

export interface IMiscLinkData {
  label: string;
  href: string;
}

const MiscLinkWrapper = styled.div`
  margin-bottom: 16px;
`;

const miscLinksData: IMiscLinkData[] = [
  {
    href: 'https://zopa.com',
    label: 'Homepage',
  },
  {
    href: 'https://zopa.com',
    label: 'Sitemap',
  },
  {
    href: 'https://zopa.com/privace-policy',
    label: 'Privacy policy',
  },
  {
    href: 'https://zopa.com/principles',
    label: 'Principles',
  },
  {
    href: 'https://zopa.com/cookie-policy',
    label: 'Cookie policy',
  },
  {
    href: 'https://zopa.com/conflicts-policy',
    label: 'Conflicts policy',
  },
  {
    href: 'https://zopa.com/website-terms',
    label: 'Website terms',
  },
];

const MiscLinks = () => (
  <FlexRow>
    {miscLinksData.map(({ label, href }, index) => (
      <FlexCol xs="auto" key={`footer-misc-links-${index}`}>
        <MiscLinkWrapper>
          <FooterLink size="small" href={href}>
            {label}
          </FooterLink>
        </MiscLinkWrapper>
      </FlexCol>
    ))}
  </FlexRow>
);

export default MiscLinks;
