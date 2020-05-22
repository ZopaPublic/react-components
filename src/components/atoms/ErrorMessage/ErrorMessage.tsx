import React, { FC } from 'react';
import styled from 'styled-components';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

const StyledErrorMessage = styled(Text).attrs({
  role: 'alert',
  size: 'small',
})`
  display: inline-flex;
  height: 30px;
  align-items: center;
  color: ${colors.alertDark};
  background-color: ${colors.alertLight};
  padding: 6px 8px;
`;

type ErrorMessageProps = {
  className?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ children, className, ...rest }) => (
  <StyledErrorMessage className={className} {...rest}>
    <Icon color={colors.alert} className="pr-2" variant={faExclamationCircle} />
    {children}
  </StyledErrorMessage>
);

export default ErrorMessage;
