import styled from 'styled-components';
import { colors, grid, spacing } from '../../../../constants';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.footer.bgColor};
  padding-bottom: ${spacing[9]};
  padding-top: ${spacing[10]};

  @media (min-width: ${grid.breakpoints.l}px) {
    padding-top: ${spacing[11]};
  }
`;
