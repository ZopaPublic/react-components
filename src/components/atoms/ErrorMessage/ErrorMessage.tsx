import React from 'react';
import styled from 'styled-components';
import { statusColors } from '../../../constants/colors';
import warningIcon from '../../../content/images/red-warning.svg';

export interface IErrorMessageProps extends React.HTMLAttributes<HTMLSpanElement> {}

const SErrorMessage = styled.span`
  font-weight: 600;
  width: 100%;
  font-size: 14px;
  color: ${statusColors.error};
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

const ErrorMessage = (props: IErrorMessageProps) => <SErrorMessage role="alert" {...props} />;

export default ErrorMessage;
