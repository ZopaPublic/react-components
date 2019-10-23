import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import warningIcon from '../../../content/images/red-warning.svg';
import Text from '../Text/Text';

interface IErrorMessageProps {
  as?: any;
}

const SErrorMessage = styled(Text).attrs({
  role: 'alert',
  weight: 'semibold',
  as: 'span',
  size: 'small',
})<IErrorMessageProps>`
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

const ErrorMessage: FC<IErrorMessageProps> = props => <SErrorMessage {...props} />;

export default ErrorMessage;
