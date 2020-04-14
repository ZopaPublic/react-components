import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { typography } from '../../../../constants/typography';

const CardHeading = styled.h6`
  color: ${colors.greyDark};
  font-weight: ${typography.weights.semiBold};
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
`;

export default CardHeading;
