import styled from 'styled-components';
import Icon from '../../atoms/Icon/Icon';
import Link from '../../atoms/Link/Link';
import { buttonStyle } from '../../atoms/Button/Button';

export const StyledIcon = styled(Icon)`
  width: 80px;
  height: 80px;
`;

export const StyledLink = styled(Link)`
  ${buttonStyle}
`;
