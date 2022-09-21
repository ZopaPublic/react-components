import Text from '../../atoms/Text/Text';
import Logo from '../../atoms/Logo/Logo';
import Link, { LinkProps } from '../../atoms/Link/Link';
import { typography } from '../../../constants';
import styled, { css } from 'styled-components';
import React, { HTMLAttributes } from 'react';
import FlexRow from '../../layout/FlexRow/FlexRow';
import FlexCol from '../../layout/FlexCol/FlexCol';
import { useThemeContext } from '../../styles/Theme';
import twitter from '../../../content/images/social/twitter.svg';
import facebook from '../../../content/images/social/facebook.svg';
import linkedin from '../../../content/images/social/linkedin.svg';
import instagram from '../../../content/images/social/instagram.svg';
import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import { Footer, Heading, LegalBlock, List, LogoBlock, SocialBlock, SocialLink } from './styles';

export const footerLinkStyle = css`
  font-weight: ${typography.weights.regular};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  ${footerLinkStyle}
`;

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  baseUrl?: string;
  renderLink?: (props: LinkProps) => React.ReactNode;
  additionalCopy?: string[];
}

const ZopaFooter = ({
  baseUrl = 'https://www.zopa.com',
  renderLink = (props: LinkProps) => <StyledLink {...props} />,
  additionalCopy = [],
  ...rest
}: FooterProps) => {
  const theme = useThemeContext();

  return (
    <Footer data-automation="ZA.footer" theme={theme} {...rest} className={theme.footer.className}>
      <FlexContainer gutter={16}>
        {theme.footer.showFooterLinks && (
          <FlexRow className="mb-6">
            <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
              <Heading className="mb-4 s:mb-6">What we do</Heading>
              <List>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/car-finance`, children: 'Car hire purchase' })}
                </li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/loans/car-loans`, children: 'Car loans' })}</li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/loans/debt-consolidation`, children: 'Debt consolidation loans' })}
                </li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/loans/home-improvement`, children: 'Home improvement loans' })}
                </li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/loans/wedding`, children: 'Wedding loans' })}</li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/credit-card`, children: 'Credit cards' })}</li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/smart-saver`, children: 'Smart Saver' })}</li>
                <li>{renderLink({ href: `${baseUrl}/savings-accounts`, children: 'Fixed Term Savings' })}</li>
              </List>
            </FlexCol>
            <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
              <Heading className="mb-4 s:mb-6">About Zopa</Heading>
              <List>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/about`, children: 'About us' })}</li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/about/our-story`, children: 'Our story' })}</li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/about/board`, children: 'Meet the board' })}</li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/about/leadership`, children: 'Meet the leadership team' })}
                </li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/pledge2025`, children: 'Fintech Pledge 2025' })}
                </li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/investor-information`, children: 'Annual Reports and Pillar 3' })}
                </li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/about/awards`, children: 'Awards' })}</li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/about/careers`, children: 'Careers' })}</li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/blog`, children: 'Blog' })}</li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/contact/complaints`, children: 'Complaints' })}
                </li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/about/press`, children: 'Press office' })}</li>
                <li>{renderLink({ href: `${baseUrl}/invest`, children: 'Peer-to-peer investments' })}</li>
              </List>
            </FlexCol>
            <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
              <Heading className="mb-4 s:mb-6">Legal</Heading>
              <List>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/privacy-notice`, children: 'Privacy notice' })}
                </li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/cookie-policy`, children: 'Cookie policy' })}</li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/conflicts-policy`, children: 'Conflicts policy' })}
                </li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/modern-slavery`, children: 'Modern slavery' })}
                </li>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/terms-of-use`, children: 'Terms of use' })}</li>
                <li className="mb-4">
                  {renderLink({ href: `${baseUrl}/investor-principles`, children: 'Investor principles' })}
                </li>
                <li>{renderLink({ href: `${baseUrl}/remuneration`, children: 'Remuneration' })}</li>
              </List>
            </FlexCol>
            <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
              <Heading className="mb-4 s:mb-6">Navigation</Heading>
              <List>
                <li className="mb-4">{renderLink({ href: `${baseUrl}/help`, children: 'Help' })}</li>
                <li>{renderLink({ href: `${baseUrl}/sitemap`, children: 'Sitemap' })}</li>
              </List>
            </FlexCol>
          </FlexRow>
        )}
        <FlexRow>
          {theme.footer.showLogoBlock && (
            <LogoBlock>
              {renderLink({ href: baseUrl, title: 'Logo', children: <Logo width="165px" height="30px" /> })}
            </LogoBlock>
          )}
          {theme.footer.showSocialBlock && (
            <SocialBlock>
              <SocialLink
                href="https://facebook.com/zopa"
                aria-label="Facebook"
                title="Facebook opens in a new tab"
                variant={facebook}
              />
              <SocialLink
                href="https://twitter.com/zopa"
                aria-label="Twitter"
                title="Twitter opens in a new tab"
                variant={twitter}
              />
              <SocialLink
                href="https://www.instagram.com/Zopamoney/"
                aria-label="Instagram"
                title="Instagram opens in a new tab"
                variant={instagram}
              />
              <SocialLink
                href="https://www.linkedin.com/company/zopa/"
                aria-label="Linkedin"
                title="Linkedin opens in a new tab"
                variant={linkedin}
              />
            </SocialBlock>
          )}
          {theme.footer.showLegalBlock && (
            <LegalBlock xs={12} l={theme.footer.legalBlock.isFullWidth ? 12 : 5} theme={theme}>
              <Text as="p" color={theme.footer.legalBlock.color} size="small" className="mb-4">
                Zopa Bank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial
                Conduct Authority and the Prudential Regulation Authority, and entered on the Financial Services
                Register (800542). Zopa Bank Limited (10627575) is incorporated in England &amp; Wales and has its
                registered office at: 1st Floor, Cottons Centre, Tooley Street, London, SE1 2QG.
              </Text>
              <Text as="p" color={theme.footer.legalBlock.color} size="small" className="mb-4">
                © Zopa Bank Limited {new Date().getFullYear()} All rights reserved. 'Zopa' is a trademark of Zopa Bank
                Limited.
              </Text>
              <Text
                as="p"
                color={theme.footer.legalBlock.color}
                size="small"
                className={additionalCopy.length ? 'mb-4' : ''}
              >
                Zopa is a member of Cifas – the UK’s leading anti-fraud association, and we are registered with the
                Office of the Information Commissioner (ZA275984).
              </Text>
              {additionalCopy.map((copy, i) => (
                <Text
                  as="p"
                  color={theme.footer.legalBlock.color}
                  size="small"
                  key={i}
                  className={i > additionalCopy.length ? 'mb-0' : 'mb-4'}
                >
                  {copy}
                </Text>
              ))}
            </LegalBlock>
          )}
        </FlexRow>
      </FlexContainer>
    </Footer>
  );
};

export default ZopaFooter;
