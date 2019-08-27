import styled from 'styled-components';
import * as colors from '../colors';
import Link from '../../../atoms/Link/Link';

export const FooterLink = styled(Link)`
  color: ${colors.neutral200};

  &:hover {
    color: ${colors.neutral400};
  }
`;

export default FooterLink;
