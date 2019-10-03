import styled from 'styled-components';
import Link from '../../../atoms/Link/Link';
import { colors } from '../../../../constants/colors';

export interface IFooterLink extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: 'default' | 'small';
}

const FooterLink = styled(Link)`
  color: ${colors.neutral.medium};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.neutral.nearDark};
  }
`;

FooterLink.defaultProps = {
  size: 'default',
  weight: 'semibold',
};

export default FooterLink;
