import React from 'react';
import styled from 'styled-components';

import Text from '../../../atoms/Text/Text';
import Wrapper from '../Wrapper/Wrapper';
import { colors } from '../../../../constants/colors';

const StyledParagraph = styled(Text).attrs({
  forwardedAs: 'p',
  size: 'small',
  weight: 'semibold',
})`
  color: ${colors.neutral.medium};
  margin: 0 0 24px 0;
`;

const Legal = () => {
  const { about, rightsReserved, cifas } = {
    about: `Zopa Limited is authorised and regulated by the Financial Conduct Authority, and entered on the Financial Services Register (718925). Zopa Bank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority, and entered on the Financial Services Register (800542). Zopa Limited (05197592) and Zopa Bank Limited (10627575) are both incorporated in England & Wales and have their registered office at: 1st Floor, Cottons Centre, Tooley Street, London, SE1 2QG.`,

    rightsReserved: `© Zopa Bank Limited ${new Date().getFullYear()} All rights reserved. 'Zopa' is a trademark of Zopa Bank Limited.`,

    cifas: `Zopa is a member of Cifas – the UK’s leading anti-fraud association, and we are registered with the Office of the Information Commissioner (ZA275984, Z8797078).

    `,
  };

  return (
    <>
      <Wrapper>
        <StyledParagraph>{about}</StyledParagraph>
        <StyledParagraph>{rightsReserved}</StyledParagraph>
        <StyledParagraph>{cifas}</StyledParagraph>
      </Wrapper>
    </>
  );
};

export default Legal;
