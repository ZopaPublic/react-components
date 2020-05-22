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
  display: flex;
  position: relative;
  padding: 8px 16px 8px 16px;
  color: ${colors.alertDark};
  background-color: ${colors.alertLight};
  position: relative;
  padding: 8px 16px 8px 16px;
  font-size: 15px;
  line-height: 20px;
  font-family: ${typography.primary};
  font-weight: 400;
  max-width: 336px;

  a {
    font-size: 15px;
    line-height: 20px;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;

  svg {
    display: block;
  }
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
