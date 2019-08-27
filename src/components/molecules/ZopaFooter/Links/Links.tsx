import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../../constants/colors';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FooterLink from '../FooterLink/FooterLink';
import Separator from '../Separator/Separator';
import Wrapper from '../Wrapper/Wrapper';

const StyledHeading = styled.div`
  font-size: 18px;
  color: ${colors.base.white};
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  margin: 0 0 8px 0;
  padding: 0;
`;

export interface ILinkData {
  label: string;
  href: string;
}

export interface ILinkGroups {
  heading: string;
  links: ILinkData[];
}

const linkGroups = [
  {
    heading: 'What we do',
    links: [
      {
        href: 'https://www.zopa.com/loans/car-loans',
        label: 'Car loans',
      },
      {
        href: 'https://www.zopa.com/loans/debt-consolidation',
        label: 'Debt consolidation loans',
      },
      {
        href: 'https://www.zopa.com/loans/home-improvement',
        label: 'Home improvement loans',
      },
      {
        href: 'https://www.zopa.com/loans/wedding',
        label: 'Wedding loans',
      },
      {
        href: 'https://www.zopa.com/invest',
        label: 'Peer-to-peer investments',
      },
      {
        href: 'https://www.zopa.com/invest/isa',
        label: 'Innovative Finance ISA',
      },
    ],
  },
  {
    heading: 'About Zopa',
    links: [
      {
        href: 'https://www.zopa.com/about',
        label: 'About Us',
      },
      {
        href: 'https://www.zopa.com/about/our-story',
        label: 'Our story',
      },
      {
        href: 'https://www.zopa.com/about/board',
        label: 'Meet the board',
      },
      {
        href: 'https://www.zopa.com/about/leadership',
        label: 'Meet the leadership team',
      },
      {
        href: 'https://www.zopa.com/about/awards',
        label: 'Awards',
      },
      {
        href: 'https://www.zopa.com/about/careers',
        label: 'Careers',
      },
      {
        href: 'https://blog.zopa.com',
        label: 'Blog',
      },
      {
        href: 'https://www.zopa.com/about/press',
        label: 'Press team',
      },
      {
        href: 'https://www.zopa.com/feelgood',
        label: 'New products',
      },
    ],
  },
  {
    heading: 'Legal',
    links: [
      {
        href: 'https://www.zopa.com/cookie-policy',
        label: 'Cookie policy',
      },
      {
        href: 'https://www.zopa.com/conflicts-policy',
        label: 'Conflicts policy',
      },
      {
        href: 'https://www.zopa.com/modern-slavery',
        label: 'Modern slavery',
      },
      {
        href: 'https://www.zopa.com/website-terms',
        label: 'Website terms',
      },
    ],
  },
  {
    heading: 'Navigation',
    links: [
      {
        href: 'https://www.zopa.com/contact',
        label: 'Support',
      },
      {
        href: 'https://www.zopa.com/support/faqs',
        label: 'Common Questions',
      },
      {
        href: 'https://www.zopa.com/sitemap',
        label: 'Sitemap',
      },
    ],
  },
];

const Links = () => (
  <FlexRow>
    {linkGroups.map(({ heading, links }, index) => (
      <FlexCol xs={12} s={6} m={4} l={3} key={`footer-links-${index}`}>
        <Wrapper>
          <StyledHeading>{heading}</StyledHeading>
          <StyledList>
            {links.map(({ label, href }) => (
              <StyledListItem key={label}>
                <FooterLink href={href}>{label}</FooterLink>
              </StyledListItem>
            ))}
          </StyledList>
        </Wrapper>
        <FlexCol xs="fill" s="hidden">
          <Separator />
        </FlexCol>
      </FlexCol>
    ))}
  </FlexRow>
);

export default Links;
