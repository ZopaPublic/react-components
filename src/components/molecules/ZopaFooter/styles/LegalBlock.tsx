import styled from 'styled-components';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import Text from '../../../atoms/Text/Text';
import { grid } from '../../../../constants';

export const LegalBlock = styled(FlexCol)`
  order: 3;
  p {
    font-size: ${({ theme }) => theme.footer.legalBlock.fontSize};
    color: ${({ theme }) => theme.footer.legalBlock.color};
    line-height: ${({ theme }) => theme.footer.legalBlock.lineHeight};
  }

  @media (min-width: ${grid.breakpoints.l}px) {
    order: 2;
  }
`;
