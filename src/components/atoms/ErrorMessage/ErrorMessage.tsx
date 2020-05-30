import React, { FC } from 'react';
import styled from 'styled-components';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

const StyledErrorMessage = styled(Text).attrs({
  role: 'alert',
  size: 'small',
})`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px 8px 16px;
  color: ${colors.alertDark};
  background-color: ${colors.alertLight};
  font-size: ${typography.sizes.text.body};
  font-family: ${typography.primary};
  font-weight: ${typography.weights.regular};
  max-width: 336px;

  a {
    font-size: ${typography.sizes.text.body};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const IconWrapper = styled.span`
  font-size: 20px;
  align-self: flex-start;
`;

type ErrorMessageProps = {
  className?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ children, className, ...rest }) => (
  <StyledErrorMessage className={className} {...rest}>
    <IconWrapper>
      <Icon color={colors.alert} className="pr-2" variant={faExclamationCircle} />
    </IconWrapper>
    {children}
  </StyledErrorMessage>
);

export default ErrorMessage;
