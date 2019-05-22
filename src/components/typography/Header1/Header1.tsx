import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface IHeader1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const SHeader = styled.h1`
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0;
  font-family: ${fonts.alverata};
`;

const Header1 = (props: IHeader1Props) => {
  return <SHeader {...props} />;
};

export default Header1;
