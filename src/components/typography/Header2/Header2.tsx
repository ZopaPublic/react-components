import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface IHeader2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const SHeader = styled.h2`
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0;
  font-family: ${fonts.alverata};
`;

const Header2 = (props: IHeader2Props) => {
  return <SHeader {...props} />;
};

export default Header2;
