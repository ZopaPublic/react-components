import styled from 'styled-components';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import { grid } from '../../../../constants';

export const LegalBlock = styled(FlexCol)`
  order: 3;

  @media (min-width: ${grid.breakpoints.l}px) {
    order: 2;
  }
`;
