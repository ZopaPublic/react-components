import React from 'react';
import styled from 'styled-components';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import { useThemeContext } from '../../styles/Theme';

const StyledErrorMessage = styled(Text).attrs({
  role: 'alert',
})`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.errorMessage.padding};
  color: ${({ theme }) => theme.errorMessage.textColor};
  background-color: ${({ theme }) => theme.errorMessage.backgroundColor};
  font-size: ${typography.sizes.text.body};
  font-family: ${({ theme }) => theme.typography.primary};
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
  children?: React.ReactNode;
  className?: string;
};

const ErrorMessage = ({ children, className, ...rest }: ErrorMessageProps) => {
  const theme = useThemeContext();
  return (
    <StyledErrorMessage className={className} {...rest} theme={theme}>
      {theme.errorMessage.icon ? (
        <IconWrapper>
          <Icon color={colors.alert} className="pr-2" variant={faMinusCircle} />
        </IconWrapper>
      ) : null}
      {children}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
