import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface ITitle3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const STitle = styled.h1`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  font-family: ${fonts.openSans};
`;

const Title3 = (props: ITitle3Props) => {
  return <STitle {...props} />;
};

export default Title3;
