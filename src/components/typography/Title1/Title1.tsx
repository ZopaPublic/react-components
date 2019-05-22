import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface ITitle1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const STitle = styled.h1`
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0;
  font-family: ${fonts.openSans};
`;

const Title1 = (props: ITitle1Props) => {
  return <STitle {...props} />;
};

export default Title1;
