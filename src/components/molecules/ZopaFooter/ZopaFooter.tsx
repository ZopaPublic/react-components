import Text from '../../atoms/Text/Text';
import Logo from '../../atoms/Logo/Logo';
import Link, { LinkProps } from '../../atoms/Link/Link';
import { typography, grid, spacing, colors } from '../../../constants';
import styled, { css } from 'styled-components';
import React, { HTMLAttributes } from 'react';
import FlexRow from '../../layout/FlexRow/FlexRow';
import FlexCol from '../../layout/FlexCol/FlexCol';
import { AppTheme, useThemeContext, zopaTheme } from '../../styles/Theme';
import twitter from '../../../content/images/social/twitter.svg';
import facebook from '../../../content/images/social/facebook.svg';
import linkedin from '../../../content/images/social/linkedin.svg';
import instagram from '../../../content/images/social/instagram.svg';
import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import Heading from '../../atoms/Heading/Heading';
import { SocialLink } from './styles/SocialLink';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.footer.bgColor || colors.white};
`;

export const FooterHeading = styled(Heading)`
  text-transform: uppercase;
`;

const LegalBlock = styled(FlexCol)`
  order: 3;

  @media (min-width: ${grid.breakpoints.l}px) {
    order: 2;
  }
`;

export const Icon = styled.span<{ variant: string }>`
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url(${({ variant }) => variant}) no-repeat;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const LogoBlock = styled(FlexCol).attrs({ xs: 12, l: 3 })`
  margin-bottom: ${spacing[8]};
  text-align: center;
  order: 1;

  @media (min-width: ${grid.breakpoints.l}px) {
    text-align: left;
  }
`;

const SocialBlock = styled(FlexCol).attrs({ xs: 12, l: 4 })<{ textAlign?: string; order?: string }>`
  margin-bottom: ${spacing[7]};
  text-align: center;
  order: ${({ order }) => order || '2'};

  @media (min-width: ${grid.breakpoints.l}px) {
    text-align: ${({ textAlign }) => textAlign || 'right'};
    order: ${({ order }) => order || '3'};
  }
`;

const SocialIconsWrapper = styled.div`
  padding-bottom: ${spacing[2]};
  @media (max-width: ${grid.breakpoints.s}px) {
    padding: 0 12px ${spacing[2]};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => color || colors.white};
  margin: 40px 0;
`;

const FullWidthWrapper = styled.div`
  position: relative;
  left: 49%;
  width: 100vw;
  margin-left: -50vw;
`;

export const footerLinkStyle = css`
  font-weight: ${typography.weights.regular};
  text-decoration: none;
  color: ${colors.actionPlain};
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)<{ hoverColor?: string }>`
  ${footerLinkStyle}
  color: ${({ color }) => color};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

const MainZopaLegalCopy = () => {
  const theme = useThemeContext();
  return (
    <>
      <Text as="p" color={theme.footer.legalBlock.color} size="small" className="mb-4">
        Zopa Bank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct
        Authority and the Prudential Regulation Authority, and entered on the Financial Services Register (800542). Zopa
        Bank Limited (10627575) is incorporated in England &amp; Wales and has its registered office at: 1st Floor,
        Cottons Centre, Tooley Street, London, SE1 2QG.
      </Text>
      <Text as="p" color={theme.footer.legalBlock.color} size="small" className="mb-4">
        © Zopa Bank Limited {new Date().getFullYear()} All rights reserved. 'Zopa' is a trademark of Zopa Bank Limited.
      </Text>
      <Text as="p" color={theme.footer.legalBlock.color} size="small" className="mb-4">
        Zopa is a member of Cifas – the UK’s leading anti-fraud association, and we are registered with the Office of
        the Information Commissioner (ZA275984).
      </Text>
    </>
  );
};

const MainCustomLegalCopy = ({ copy }: { copy: FooterProps['mainCustomLegalCopy'] }) => {
  const theme = useThemeContext();
  const copyArray = Array.isArray(copy) ? copy : [copy];
  return (
    <>
      {theme.footer.showDivider ? (
        <FullWidthWrapper>
          <Divider color={theme.footer.dividerColor} />
        </FullWidthWrapper>
      ) : null}
      {copyArray.map((copy, i) => {
        return (
          <Text
            as="p"
            color={theme.footer.legalBlock.color}
            size="body"
            key={i}
            className={i > copyArray.length ? '' : 'mb-4'}
          >
            {copy}
          </Text>
        );
      })}
    </>
  );
};

const ZopaFooterLinks = () => {
  return (
    <FlexRow className="mb-6">
      <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
        <FooterHeading as="h4" className="mb-4 s:mb-6 mt-0">
          What we do
        </FooterHeading>
        <List>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/car-finance">Car finance</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/car-finance/hp">Hire purchase (HP)</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/car-finance/pcp">Personal contract purchase (PCP)</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/loans/car-loans">Car loans</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/loans/debt-consolidation">Debt consolidation loans</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/loans/home-improvement">Home improvement loans</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/loans/wedding">Wedding loans</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/credit-card">Credit cards</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/smart-saver">Smart Saver</StyledLink>
          </li>
          <li>
            <StyledLink href="https://www.zopa.com/savings-accounts">Fixed Term Savings</StyledLink>
          </li>
        </List>
      </FlexCol>
      <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
        <FooterHeading as="h4" className="mb-4 s:mb-6 mt-0">
          About Zopa
        </FooterHeading>
        <List>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/about">About us</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/about/our-story">Our story</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/about/board">Meet the board</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/about/leadership">Meet the leadership team</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/pledge2025">Fintech Pledge 2025</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/investor-information">Annual Reports and Pillar 3</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/about/awards">Awards</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/about/careers">Careers</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/blog">Blog</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/contact/complaints">Complaints</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/about/press">Press office</StyledLink>
          </li>
          <li>
            <StyledLink href="https://www.zopa.com/invest">Peer-to-peer investments</StyledLink>
          </li>
        </List>
      </FlexCol>
      <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
        <FooterHeading as="h4" className="mb-4 s:mb-6 mt-0">
          Legal
        </FooterHeading>
        <List>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/privacy-notice">Privacy notice</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/cookie-policy">Cookie policy</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/conflicts-policy">Conflicts policy</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/modern-slavery">Modern slavery</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/terms-of-use">Terms of use</StyledLink>
          </li>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/investor-principles">Investor principles</StyledLink>
          </li>
          <li>
            <StyledLink href="https://www.zopa.com/remuneration">Remuneration</StyledLink>
          </li>
        </List>
      </FlexCol>
      <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
        <FooterHeading as="h4" className="mb-4 s:mb-6 mt-0">
          Navigation
        </FooterHeading>
        <List>
          <li className="mb-4">
            <StyledLink href="https://www.zopa.com/help">Help</StyledLink>
          </li>
          <li>
            <StyledLink href="https://www.zopa.com/sitemap">Sitemap</StyledLink>
          </li>
        </List>
      </FlexCol>
    </FlexRow>
  );
};

const CustomFooterLinks = ({ customFooterLinks }: { customFooterLinks: FooterProps['customFooterLinks'] }) => {
  const theme = useThemeContext();
  return (
    <FlexRow className="pt-8 px-14">
      {customFooterLinks!.map((section: CustomFooterLink, i: number) => (
        <FlexCol xs={12} s={6} l={3} key={i} className="mb-6">
          <Heading
            as="h6"
            className="mb-4 s:mb-6 mt-0 !font-semibold !leading-5 !text-base"
            color={theme.footer.customLinksColor}
          >
            {section.heading}
          </Heading>
          <List>
            {section.links.map((link, j) => (
              <li className="mb-6 last:mb-0" key={j}>
                <StyledLink
                  href={link.href}
                  color={theme.footer.customLinksColor}
                  hoverColor={theme.footer.customLinksHoverColor}
                >
                  {link.text}
                </StyledLink>
              </li>
            ))}
          </List>
        </FlexCol>
      ))}
    </FlexRow>
  );
};

const ZopaSocial = () => {
  return (
    <SocialBlock cols={12}>
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
  );
};

const CustomSocial = () => {
  const theme = useThemeContext();
  return (
    <SocialBlock textAlign="left" order="3">
      {theme.footer.showDivider ? (
        <FullWidthWrapper>
          <Divider color={theme.footer.dividerColor} />
        </FullWidthWrapper>
      ) : null}

      <SocialIconsWrapper>
        {theme.footer.customSocialBlock?.map((social, i) => (
          <SocialLink
            key={i}
            href={social.href}
            aria-label={social.ariaLabel}
            title={social.title}
            CustomIcon={social.icon}
            hoverColor={social.hoverColor}
          />
        ))}
      </SocialIconsWrapper>
    </SocialBlock>
  );
};

interface CustomFooterLink {
  heading: string;
  links: { href: string; text: string }[];
}

/**
 * Use this component to render a Zopa Footer
 *
 * @param baseUrl {string} the url the links will use as a base
 * @param renderLink {(props: LinkProps) => React.ReactNode} a callback function allowing an application to render the Logo component
 * @param mainCustomLegalCopy {string|string[]} if you need to pass some specific main legal copy from another partner use this
 * @param additionalCopy {string[]} if you need to pass additional copy after the legal copy
 * @param customFooterLinks {customFooterinks[]} if you need to pass different links than the default ones
 */

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  baseUrl?: string;
  renderLink?: (props: LinkProps) => React.ReactNode;
  mainCustomLegalCopy?: string | string[];
  additionalCopy?: string[];
  customFooterLinks?: CustomFooterLink[];
  isCobranded?: boolean;
  mainCobrandedLegalCopy?: Element;
}

const ZopaFooter = ({
  baseUrl = 'https://www.zopa.com',
  renderLink = (props: LinkProps) => <StyledLink {...props} />,
  additionalCopy = [],
  mainCustomLegalCopy,
  customFooterLinks,
  isCobranded,
  mainCobrandedLegalCopy,
  ...rest
}: FooterProps) => {
  const themeContext = useThemeContext();
  let theme: AppTheme;
  if (isCobranded) {
    theme = zopaTheme;
  } else {
    theme = themeContext;
  }

  console.log('mainCobrandedLegalCopy', mainCobrandedLegalCopy);

  return (
    <Footer data-automation="ZA.footer" theme={theme} {...rest} className={theme.footer.className}>
      <FlexContainer gutter={16}>
        {theme.footer.showFooterLinks &&
          (customFooterLinks ? <CustomFooterLinks customFooterLinks={customFooterLinks} /> : <ZopaFooterLinks />)}
        <FlexRow>
          {theme.footer.showLogoBlock && (
            <LogoBlock>
              <StyledLink href={baseUrl} title="Logo" className="mb-4">
                <Logo width="165px" height="30px" />
              </StyledLink>
            </LogoBlock>
          )}
          {theme.footer.showLegalBlock ? (
            <LegalBlock xs={12} l={theme.footer.legalBlock.isFullWidth ? 12 : 4} theme={theme}>
              {mainCustomLegalCopy ? (
                <MainCustomLegalCopy copy={mainCustomLegalCopy} />
              ) : mainCobrandedLegalCopy ? (
                <div>
                  <div>TEST</div>
                  {mainCobrandedLegalCopy}
                </div>
              ) : (
                <MainZopaLegalCopy />
              )}
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
          ) : null}
          {theme.footer.showSocialBlock ? theme.footer.customSocialBlock ? <CustomSocial /> : <ZopaSocial /> : null}
        </FlexRow>
      </FlexContainer>
    </Footer>
  );
};

export default ZopaFooter;
