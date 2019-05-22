import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface ISubheadProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const SSubhead = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0;
  font-family: ${fonts.openSans};
`;

const Subhead = (props: ISubheadProps) => {
  return <SSubhead {...props} />;
};

export default Subhead;
