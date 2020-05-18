import styled from 'styled-components';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import { spacing } from '../../../../constants/spacing';
import grid from '../../../../constants/grid';

export const SocialBlock = styled(FlexCol).attrs({ xs: 12, l: 4 })`
  margin-bottom: ${spacing[7]};
  text-align: center;
  order: 2;

  @media (min-width: ${grid.breakpoints.l}px) {
    text-align: right;
    order: 3;
  }
`;
