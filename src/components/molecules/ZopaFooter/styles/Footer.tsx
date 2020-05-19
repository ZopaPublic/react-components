import styled from 'styled-components';
import { spacing } from '../../../../constants/spacing';
import grid from '../../../../constants/grid';
import { colors } from '../../../..';

export const Footer = styled.footer`
  backgroung-color: ${colors.white};
  padding-bottom: ${spacing[9]};
  padding-top: ${spacing[10]};

  @media (min-width: ${grid.breakpoints.l}px) {
    padding-top: ${spacing[11]};
  }
`;
