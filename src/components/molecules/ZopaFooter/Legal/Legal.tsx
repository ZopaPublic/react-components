import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../constants/colors';
import grid from '../../../../constants/grid';
import Text from '../../../atoms/Text/Text';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import ZopaLogo from '../../../icons/ZopaLogo/ZopaLogo';
import SocialLinks from '../SocialLinks/SocialLinks';

const LogoLink = styled.a`
  display: flex;
  color: ${colors.brand};
  &:hover,
  &:active {
    color: ${colors.brand};
  }
`;

const StyledParagraph = styled(Text).attrs({
  forwardedAs: 'p',
  size: 'small',
  color: '#4A545E',
})`
  margin: -4px 0 24px 0;
`;

const SocialLinksRow = styled(FlexRow)`
  justify-content: center;
  @media (min-width: ${grid.breakpoints.m}px) {
    justify-content: flex-end;
  }
`;

const Legal = ({ logoUrl = 'https://www.zopa.com' }) => {
  const { about, rightsReserved, cifas } = {
    about: `Zopa Limited is authorised and regulated by the Financial Conduct Authority, and entered on the Financial Services Register (718925). Zopa Bank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority, and entered on the Financial Services Register (800542). Zopa Limited (05197592) and Zopa Bank Limited (10627575) are both incorporated in England & Wales and have their registered office at: 1st Floor, Cottons Centre, Tooley Street, London, SE1 2QG.`,
    rightsReserved: `© Zopa Bank Limited ${new Date().getFullYear()} All rights reserved. 'Zopa' is a trademark of Zopa Bank Limited.`,
    cifas: `Zopa is a member of Cifas – the UK’s leading anti-fraud association, and we are registered with the Office of the Information Commissioner (ZA275984, Z8797078).`,
  };

  return (
    <FlexRow direction="row-reverse">
      <FlexCol xs={12} m={3}>
        <SocialLinksRow>
          <SocialLinks />
        </SocialLinksRow>
      </FlexCol>
      <FlexCol xs={12} m={6}>
        <StyledParagraph>{about}</StyledParagraph>
        <StyledParagraph>{rightsReserved}</StyledParagraph>
        <StyledParagraph>{cifas}</StyledParagraph>
      </FlexCol>
      <FlexCol xs="hidden" m={3}>
        <LogoLink href={logoUrl}>
          <ZopaLogo width="160px" color={colors.brand} />
        </LogoLink>
      </FlexCol>
    </FlexRow>
  );
};

export default Legal;
