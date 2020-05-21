import styled from 'styled-components';
import ZopaIcon from '../../Icon/Icon';
import { grid } from '../../../../constants';

export const Icon = styled(ZopaIcon)`
  display: block;
  font-size: 12px;

  @media (min-width: ${grid.breakpoints.m}px) {
    font-size: 20px;
  }
`;
