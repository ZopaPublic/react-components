import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface ILeadProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const SLead = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0;
  font-family: ${fonts.openSans};
`;

const Lead = (props: ILeadProps) => {
  return <SLead {...props} />;
};

export default Lead;
