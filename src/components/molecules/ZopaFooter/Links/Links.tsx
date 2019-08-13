import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../../constants/colors';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FooterLink from '../FooterLink/FooterLink';
import Separator from '../Separator/Separator';
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
  color: ${colors.base.white};
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

const linkGroups = [
  {
    heading: 'About Zopa',
    links: [
      {
        href: 'https://zopa.com/about',
        label: 'About Zopa',
      },
      {
        href: 'https://zopa.com/about/how-zopa-works',
        label: 'How Zopa works',
      },
      {
        href: 'https://zopa.com/about/join-us',
        label: 'Join us',
      },
      {
        href: 'https://zopa.com/about/press',
        label: 'Press office',
      },
      {
        href: 'https://zopa.com/contact',
        label: 'Contact Zopa',
      },
    ],
  },
  {
    heading: 'Zopa Loans',
    links: [
      {
        href: 'https://zopa.com/loans/debt-consolidation',
        label: 'Debt consolidation',
      },
      {
        href: 'https://zopa.com/loans/home-improvement',
        label: 'Home improvements',
      },
      {
        href: 'https://zopa.com/loans/car-loans',
        label: 'Car loans',
      },
      {
        href: 'https://zopa.com/loans/faq',
        label: 'FAQs for loans',
      },
    ],
  },
  {
    heading: 'Invest your money',
    links: [
      {
        href: 'https://zopa.com/lending',
        label: 'Invest at Zopa',
      },
      {
        href: 'https://zopa.com/lending/risk-management',
        label: 'Risk management',
      },
      {
        href: 'https://zopa.com/lending/faq',
        label: 'FAQs for investing',
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
