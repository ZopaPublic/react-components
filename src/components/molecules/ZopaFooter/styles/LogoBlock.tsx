import styled from 'styled-components';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import { grid, spacing } from '../../../../constants';

export const LogoBlock = styled(FlexCol).attrs({ xs: 12, l: 3 })`
  margin-bottom: ${spacing[8]};
  text-align: center;
  order: 1;

  @media (min-width: ${grid.breakpoints.l}px) {
    text-align: left;
  }
`;
