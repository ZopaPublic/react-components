import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface IHeader3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const SHeader = styled.h3`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  font-family: ${fonts.alverata};
`;

const Header3 = (props: IHeader3Props) => {
  return <SHeader {...props} />;
};

export default Header3;
