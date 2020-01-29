import React, { FC } from 'react';
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

export interface ILinksProps {
  baseUrl?: string;
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

const linkGroups = (baseUrl: string) => [
  {
    heading: 'What we do',
    links: [
      {
        href: `${baseUrl}/loans/car-loans`,
        label: 'Car loans',
      },
      {
        href: `${baseUrl}/loans/debt-consolidation`,
        label: 'Debt consolidation loans',
      },
      {
        href: `${baseUrl}/loans/home-improvement`,
        label: 'Home improvement loans',
      },
      {
        href: `${baseUrl}/loans/wedding`,
        label: 'Wedding loans',
      },
      {
        href: `${baseUrl}/invest`,
        label: 'Peer-to-peer investments',
      },
      {
        href: `${baseUrl}/invest/isa`,
        label: 'Innovative Finance ISA',
      },
    ],
  },
  {
    heading: 'About Zopa',
    links: [
      {
        href: `${baseUrl}/about`,
        label: 'About Us',
      },
      {
        href: `${baseUrl}/about/our-story`,
        label: 'Our story',
      },
      {
        href: `${baseUrl}/about/board`,
        label: 'Meet the board',
      },
      {
        href: `${baseUrl}/about/leadership`,
        label: 'Meet the leadership team',
      },
      {
        href: `${baseUrl}/about/awards`,
        label: 'Awards',
      },
      {
        href: `${baseUrl}/about/careers`,
        label: 'Careers',
      },
      {
        href: 'https://blog.zopa.com',
        label: 'Blog',
      },
      {
        href: `${baseUrl}/about/press`,
        label: 'Press team',
      },
      {
        href: `${baseUrl}/feelgood`,
        label: 'New products',
      },
    ],
  },
  {
    heading: 'Legal',
    links: [
      {
        href: `${baseUrl}/privacy-notice`,
        label: 'Privacy notice',
      },
      {
        href: `${baseUrl}/cookie-policy`,
        label: 'Cookie policy',
      },
      {
        href: `${baseUrl}/conflicts-policy`,
        label: 'Conflicts policy',
      },
      {
        href: `${baseUrl}/modern-slavery`,
        label: 'Modern slavery',
      },
      {
        href: `${baseUrl}/website-terms`,
        label: 'Website terms',
      },
      {
        href: `${baseUrl}/principles`,
        label: 'P2P Principles',
      },
    ],
  },
  {
    heading: 'Navigation',
    links: [
      {
        href: `${baseUrl}/contact`,
        label: 'Support',
      },
      {
        href: 'https://helpcentre.zopa.com/',
        label: 'Common Questions',
      },
      {
        href: `${baseUrl}/sitemap`,
        label: 'Sitemap',
      },
    ],
  },
];

const Links: FC<ILinksProps> = ({ baseUrl = 'https://www.zopa.com' }) => (
  <FlexRow>
    {linkGroups(baseUrl).map(({ heading, links }, index) => (
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
