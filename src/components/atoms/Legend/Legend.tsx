import styled from 'styled-components';
import { spacing, typography } from '../../../constants';

const Legend = styled.legend`
  padding: 0;
  display: table;
  margin-bottom: ${spacing['2']};
  font-weight: ${typography.weights.semiBold};
  font-family: ${typography.primary};
  letter-spacing: 0;
`;

export default Legend;
