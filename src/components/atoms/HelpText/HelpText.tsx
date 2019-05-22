import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';

export interface IHelpText extends React.HTMLAttributes<HTMLSpanElement> {}

const SHelpText = styled.span`
  color: ${colors.neutral.neutral700};
  line-height: 24px;
  display: block;
  font-size: 14px;
  font-weight: 400;
`;

const HelpText = (props: IHelpText) => <SHelpText {...props} />;

export default HelpText;
