import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import warningIcon from '../../../content/images/red-warning.svg';
import Text from '../Text/Text';

const ErrorMessage = styled(Text).attrs({
  role: 'alert',
  weight: 'bold',
  forwardedAs: 'span',
  size: 'small',
})`
  width: 100%;
  color: ${colors.alert};
  display: flex;

  &:before {
    content: '';
    background: url(${warningIcon}) no-repeat;
    width: 20px;
    height: 16px;
    display: block;
    margin-right: 10px;
  }
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistErrorMessage: FC<{}> = props => <ErrorMessage {...props} />;

export default ErrorMessage;
