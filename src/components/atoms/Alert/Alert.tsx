import React, { FC } from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/Icon';
import { typography } from '../../../constants';
import { useThemeContext } from '../../styles/Theme';

export type Severity = 'info' | 'alert' | 'warning' | 'success' | 'brand';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  severity?: Severity;
  inline?: boolean;
  hasRoundedCorners?: boolean;
  /**
   * if present it shows the "x" icon
   */
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;
}

const Wrapper = styled.div<{ severity: Severity; inline: boolean; hasRoundedCorners: boolean }>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  position: relative;
  padding: 8px 12px 8px 12px;
  background: ${({ severity, theme }) => theme.alert[severity].background};
  color: ${({ severity, theme }) => theme.alert[severity].text};
  font-size: ${typography.sizes.text.body};
  line-height: ${typography.sizes.lineHeight.body};
  font-family: ${typography.primary};
  font-weight: 400;
  border-radius: ${({ hasRoundedCorners }) => (hasRoundedCorners ? 4 : 0)}px;
  border: ${({ severity, theme }) => theme.alert[severity].border};
  a {
    color: ${({ severity, theme }) => theme.alert[severity].text} !important;
    font-size: 15px;
    line-height: 20px;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const IconWrapper = styled.div<{ severity: Severity }>`
  margin-right: 8px;
  padding-top: 2px;
  font-size: 20px;
  color: ${({ severity, theme }) => theme.alert[severity].icon};

  svg {
    display: block;
  }
`;

const CrossIcon = styled(Icon)`
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
`;

const Alert: FC<AlertProps> = ({
  severity = 'info',
  inline = false,
  onRequestClose,
  children,
  hasRoundedCorners = false,
  ...rest
}) => {
  const theme = useThemeContext();
  const { component: Icon, text } = theme.alert[severity];

  return (
    <Wrapper severity={severity} inline={inline} hasRoundedCorners={hasRoundedCorners} {...rest} theme={theme}>
      <IconWrapper severity={severity} theme={theme}>
        <Icon />
        {onRequestClose && (
          <CrossIcon
            onClick={onRequestClose}
            color={text}
            variant={faTimes}
            data-automation="ZA.alert-cross-icon"
            size="xs"
          />
        )}
      </IconWrapper>
      <div className={onRequestClose ? 'pr-4' : ''}>{children}</div>
    </Wrapper>
  );
};

export default Alert;
