import styled from 'styled-components';
import * as colors from '../colors';
import Link from '../../../atoms/Link/Link';

export interface IFooterLink extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: 'default' | 'small';
}

const FooterLink = styled(Link)`
  color: ${colors.neutral200};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.neutral400};
  }
`;

FooterLink.defaultProps = {
  size: 'default',
  weight: 'semibold',
};

export default FooterLink;
