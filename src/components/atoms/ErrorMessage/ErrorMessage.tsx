import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import warningIcon from '../../../content/images/red-warning.svg';
import Text from '../Text/Text';

const SErrorMessage = styled(Text).attrs({
  role: 'alert',
  weight: 'semibold',
  forwardedAs: 'span',
  size: 'small',
})`
  width: 100%;
  color: ${colors.semantic.error};
  display: block;

  &:before {
    content: '';
    background: url(${warningIcon}) no-repeat;
    width: 28px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const ErrorMessage: FC<{}> = props => <SErrorMessage {...props} />;

export default ErrorMessage;
