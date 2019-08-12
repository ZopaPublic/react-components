import styled from 'styled-components';
import * as colors from '../../../../constants/colors';
import Link from '../../../atoms/Link/Link';

export const FooterLink = styled(Link)`
  color: ${colors.neutral.neutral200};

  &:hover {
    color: ${colors.neutral.neutral400};
  }
`;

export default FooterLink;
