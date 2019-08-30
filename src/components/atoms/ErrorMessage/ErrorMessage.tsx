import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import warningIcon from '../../../content/images/red-warning.svg';
import Text from '../Text/Text';

const SErrorMessage = styled(Text)`
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

const ErrorMessage = (props: HTMLAttributes<HTMLSpanElement>) => (
  <SErrorMessage {...props} role="alert" weight="semibold" size="medium" />
);

export default ErrorMessage;
