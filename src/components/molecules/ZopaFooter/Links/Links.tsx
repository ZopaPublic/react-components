import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FooterLink from '../FooterLink/FooterLink';
import Heading from '../../../atoms/Heading/Heading';
import Wrapper from '../Wrapper/Wrapper';

export interface ILinkData {
  label: string;
  href: string;
}

export interface ILinkGroups {
  heading: string;
  links: ILinkData[];
}

const StyledHeading = styled(Heading)`
  color: ${colors.neutral.white};
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  margin: 0 0 5px 0;
  padding: 0;
`;

const linkGroups = [
  {
    heading: 'What we do',
    links: [
      {
        href: 'https://zopa.com/loans/car-loans',
        label: 'Car loans',
      },
      {
        href: 'https://zopa.com/loans/debt-consolidation',
        label: 'Debt consolidation loans',
      },
      {
        href: 'https://zopa.com/loans/home-improvement',
        label: 'Home improvement loans',
      },
      {
        href: 'https://zopa.com/loans/wedding',
        label: 'Wedding loans',
      },
      {
        href: 'https://zopa.com/invest',
        label: 'Peer-to-peer investments',
      },
      {
        href: 'https://zopa.com/invest/isa',
        label: 'Innovative Finance ISA',
      },
    ],
  },
  {
    heading: 'About Zopa',
    links: [
      {
        href: 'https://zopa.com/about',
        label: 'About Us',
      },
      {
        href: 'https://zopa.com/about/our-story',
        label: 'Our story',
      },
      {
        href: 'https://zopa.com/about/board',
        label: 'Meet the board',
      },
      {
        href: 'https://zopa.com/about/leadership',
        label: 'Meet the leadership team',
      },
      {
        href: 'https://zopa.com/about/awards',
        label: 'Awards',
      },
      {
        href: 'https://zopa.com/about/careers',
        label: 'Careers',
      },
      {
        href: 'https://zopa.com/about/press',
        label: 'Press team',
      },
      {
        href: 'https://zopa.com/feelgood',
        label: 'New products',
      },
    ],
  },
  {
    heading: 'Legal',
    links: [
      {
        href: 'https://zopa.com/cookie-policy',
        label: 'Cookie policy',
      },
      {
        href: 'https://zopa.com/conflicts-policy',
        label: 'Conflicts policy',
      },
      {
        href: 'https://zopa.com/modern-slavery',
        label: 'Modern slavery',
      },
      {
        href: 'https://zopa.com/website-terms',
        label: 'Website terms',
      },
    ],
  },
  {
    heading: 'Navigation',
    links: [
      {
        href: 'https://zopa.com/contact',
        label: 'Support',
      },
      {
        href: 'https://zopa.com/support/faqs',
        label: 'Common Questions',
      },
      {
        href: 'https://zopa.com/sitemap',
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
          <StyledHeading as="h3">{heading}</StyledHeading>
          <StyledList>
            {links.map(({ label, href }) => (
              <StyledListItem key={label}>
                <FooterLink href={href}>{label}</FooterLink>
              </StyledListItem>
            ))}
          </StyledList>
        </Wrapper>
      </FlexCol>
    ))}
  </FlexRow>
);

export default Links;
