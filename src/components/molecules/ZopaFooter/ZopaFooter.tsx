import React, { HTMLAttributes } from 'react';
import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../layout/FlexRow/FlexRow';
import FlexCol from '../../layout/FlexCol/FlexCol';
import Text from '../../atoms/Text/Text';
import { Footer, Heading, LegalBlock, List, ListLink, LogoBlock, SocialBlock, SocialLink } from './styles';
import { colors } from '../../../constants';
import facebook from '../../../content/images/social/facebook.svg';
import twitter from '../../../content/images/social/twitter.svg';
import instagram from '../../../content/images/social/instagram.svg';
import linkedin from '../../../content/images/social/linkedin.svg';
import Logo from '../../atoms/Logo/Logo';
import Link from '../../atoms/Link/Link';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  baseUrl?: string;
}

const ZopaFooter = ({ baseUrl = 'https://www.zopa.com', ...rest }: FooterProps) => (
  <Footer {...rest}>
    <FlexContainer gutter={16}>
      <FlexRow className="mb-6">
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">What we do</Heading>
          <List>
            <ListLink href={`${baseUrl}/loans/car-loans`}>Car loans</ListLink>
            <ListLink href={`${baseUrl}/loans/debt-consolidation`}>Debt consolidation loans</ListLink>
            <ListLink href={`${baseUrl}/loans/home-improvement`}>Home improvement loans</ListLink>
            <ListLink href={`${baseUrl}/loans/wedding`}>Wedding loans</ListLink>
            <ListLink href={`${baseUrl}/invest`}>Peer-to-peer investments</ListLink>
            <ListLink href={`${baseUrl}/invest/isa`}>Innovative Finance ISA</ListLink>
            <ListLink href={`${baseUrl}/credit-card`}>Credit cards</ListLink>
            <ListLink href={`${baseUrl}/savings-accounts`}>Fixed Term Savings</ListLink>
          </List>
        </FlexCol>
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">About Zopa</Heading>
          <List>
            <ListLink href={`${baseUrl}/about`}>About Us</ListLink>
            <ListLink href={`${baseUrl}/about/our-story`}>Our story</ListLink>
            <ListLink href={`${baseUrl}/about/board`}>Meet the board</ListLink>
            <ListLink href={`${baseUrl}/about/leadership`}>Meet the leadership team</ListLink>
            <ListLink href={`${baseUrl}/about/awards`}>Awards</ListLink>
            <ListLink href={`${baseUrl}/about/careers`}>Careers</ListLink>
            <ListLink href="https://blog.zopa.com">Blog</ListLink>
            <ListLink href={`${baseUrl}/feelgood`}>New products</ListLink>
          </List>
        </FlexCol>
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">Legal</Heading>
          <List>
            <ListLink href={`${baseUrl}/privacy-notice`}>Privacy notice</ListLink>
            <ListLink href={`${baseUrl}/cookie-policy`}>Cookie policy</ListLink>
            <ListLink href={`${baseUrl}/conflicts-policy`}>Conflicts policy</ListLink>
            <ListLink href={`${baseUrl}/modern-slavery`}>Modern slavery</ListLink>
            <ListLink href={`${baseUrl}/terms-of-use`}>Terms of use</ListLink>
            <ListLink href={`${baseUrl}/investor-principles`}>Investor principles</ListLink>
          </List>
        </FlexCol>
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">Navigation</Heading>
          <List>
            <ListLink href={`${baseUrl}/help`}>Help</ListLink>
            <ListLink href="https://helpcentre.zopa.com/">Common Questions</ListLink>
            <ListLink href={`${baseUrl}/sitemap`}>Sitemap</ListLink>
          </List>
        </FlexCol>
      </FlexRow>
      <FlexRow>
        <LogoBlock>
          <Link href={baseUrl} title="Logo">
            <Logo width="165px" height="30px" />
          </Link>
        </LogoBlock>
        <SocialBlock>
          <SocialLink href="https://facebook.com/zopa" title="Facebook" variant={facebook} />
          <SocialLink href="https://twitter.com/zopa" title="Twitter" variant={twitter} />
          <SocialLink href="https://www.instagram.com/Zopamoney/" title="Instagram" variant={instagram} />
          <SocialLink href="https://www.linkedin.com/company/zopa/" title="Linkedin" variant={linkedin} />
        </SocialBlock>
        <LegalBlock>
          <Text as="p" color={colors.greyDark} size="small" className="mb-4">
            Zopa Limited is authorised and regulated by the Financial Conduct Authority, and entered on the Financial
            Services Register (718925). Zopa Bank Limited is authorised by the Prudential Regulation Authority and
            regulated by the Financial Conduct Authority and the Prudential Regulation Authority, and entered on the
            Financial Services Register (800542). Zopa Limited (05197592) and Zopa Bank Limited (10627575) are both
            incorporated in England & Wales and have their registered office at: 1st Floor, Cottons Centre, Tooley
            Street, London, SE1 2QG.
          </Text>
          <Text as="p" color={colors.greyDark} size="small" className="mb-4">
            © Zopa Bank Limited {new Date().getFullYear()} All rights reserved. 'Zopa' is a trademark of Zopa Bank
            Limited.
          </Text>
          <Text as="p" color={colors.greyDark} size="small">
            Zopa is a member of Cifas – the UK’s leading anti-fraud association, and we are registered with the Office
            of the Information Commissioner (ZA275984, Z8797078).
          </Text>
        </LegalBlock>
      </FlexRow>
    </FlexContainer>
  </Footer>
);

export default ZopaFooter;
