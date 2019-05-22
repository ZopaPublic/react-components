import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../../constants/fonts';

export interface ICaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const SCaption = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0;
  font-family: ${fonts.openSans};
`;

const Caption = (props: ICaptionProps) => {
  return <SCaption {...props} />;
};

export default Caption;
