import React, { FC } from 'react';
import styled from 'styled-components';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

const StyledErrorMessage = styled(Text).attrs({
  role: 'alert',
})`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px 8px 16px;
  color: ${colors.alertDark};
  background-color: ${colors.alertLight};
  font-size: ${typography.sizes.text.body};
  font-family: ${typography.primary};
  font-weight: ${typography.weights.regular};
  border-radius: 4px;
  width: 100%;

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
      <Icon color={colors.alert} className="pr-2" variant={faMinusCircle} />
    </IconWrapper>
    {children}
  </StyledErrorMessage>
);

export default ErrorMessage;
