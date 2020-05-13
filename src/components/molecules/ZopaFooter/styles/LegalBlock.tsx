import styled from 'styled-components';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import grid from '../../../../constants/grid';

export const LegalBlock = styled(FlexCol).attrs({ xs: 12, l: 5 })`
  order: 3;

  @media (min-width: ${grid.breakpoints.l}px) {
    order: 2;
  }
`;
