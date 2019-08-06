import React from 'react';
import styled from 'styled-components';

import * as colors from '../../../../constants/colors';
import Separator from '../Separator/Separator';
import Wrapper from '../Wrapper/Wrapper';

const StyledParagraph = styled.p`
  color: ${colors.neutral.neutral400};
  font-size: 11px;
  line-height: 1.5;
  margin: 0;
`;

const Legal = () => {
  const { about, rightsReserved } = {
    about: `Zopa Limited is incorporated in England & Wales (registration number 05197592), with its registered office at 1st Floor, Cottons Centre, Tooley Street, 
    London, SE1 2QG. Zopa Limited is authorised and regulated by the Financial Conduct Authority, 
    and entered on the Financial Services Register under firm registration number 718925.`,

    rightsReserved: `© Zopa Limited ${new Date().getFullYear()} All rights reserved. 'Zopa' and the Zopa logo are trade marks of Zopa Limited. 
    Zopa is a member of CIFAS – the UK's leading anti-fraud association, 
    and we are registered with the Office of the Information Commissioner (No. Z8797078).`,
  };

  return (
    <>
      <Wrapper>
        <StyledParagraph>{about}</StyledParagraph>
      </Wrapper>
      <Separator />
      <Wrapper>
        <StyledParagraph>{rightsReserved}</StyledParagraph>
      </Wrapper>
    </>
  );
};

export default Legal;
