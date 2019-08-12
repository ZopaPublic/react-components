import React from 'react';
import styled from 'styled-components';
import { statusColors } from '../../../constants/colors';
import warningIcon from '../../../content/images/red-warning.svg';
import Text, { ITextProps } from '../Text/Text';

const SErrorMessage = styled<ITextProps>(Text)`
  width: 100%;
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

const ErrorMessage = (props: ITextProps) => <SErrorMessage role="alert" weight="bold" {...props} />;

export default ErrorMessage;
