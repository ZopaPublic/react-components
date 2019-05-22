import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface ITitle2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const STitle = styled.h1`
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0;
  font-family: ${fonts.openSans};
`;

const Title2 = (props: ITitle2Props) => {
  return <STitle {...props} />;
};

export default Title2;
