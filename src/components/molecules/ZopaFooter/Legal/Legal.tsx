import React from 'react';
import styled from 'styled-components';

import * as colors from '../../../../constants/colors';
import Wrapper from '../Wrapper/Wrapper';

const StyledParagraph = styled.p`
  color: ${colors.neutral.neutral400};
  font-size: 11px;
  line-height: 1.5;
  margin: 0;
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
        <br />
        <StyledParagraph>{rightsReserved}</StyledParagraph>
        <br />
        <StyledParagraph>{cifas}</StyledParagraph>
      </Wrapper>
    </>
  );
};

export default Legal;
