import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';

const Square = styled.div`
  background-color: ${colors.greyLightest};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  font-family: monospace;
  display: inline-block;
  padding: 10px;
`;

export default function Spacing(props: HTMLAttributes<HTMLDivElement>) {
  return <Square {...props} />;
}
