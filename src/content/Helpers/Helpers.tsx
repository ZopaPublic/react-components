import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import { minMedia } from '../../helpers/responsiveness';

const Block = styled.div`
  background-color: ${colors.greyLightest};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  font-family: monospace;
  display: inline-block;
  padding: 10px;

  ${minMedia.tablet`
    background-color: ${colors.actionPlain};
  `}

  ${minMedia.desktop`
    background-color: ${colors.actionPlain};
  `}
`;

export default function ResponsiveExample(props: HTMLAttributes<HTMLDivElement>) {
  return <Block {...props} />;
}
