import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconLookup, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/Icon';
import { typography } from '../../../constants';
import { useThemeContext } from '../../styles/Theme';
import ExclamationIcon from '../../styles/icons/exclamation';
import Button from '../Button/Button';

export type Severity = 'info' | 'alert' | 'warning' | 'success' | 'brand';
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
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

const CrossButton = styled(Button)`
  position: absolute;
  right: 0px;
  top: 0px;
  &:hover {
    background: transparent;
  }
`;

const Alert = ({
  severity = 'info',
  inline = false,
  onRequestClose,
  children,
  hasRoundedCorners = false,
  ...rest
}: AlertProps) => {
  const theme = useThemeContext();
  const { component: IconComponent, text, faVariant, customVariant } = theme.alert[severity];
  let iconDefinition, CustomIcon;

  if (faVariant) {
    const iconLookup: IconLookup = { prefix: faVariant.prefix, iconName: faVariant.iconName };
    iconDefinition = findIconDefinition(iconLookup);

    if (!iconDefinition) {
      throw new Error(`Icon ${faVariant.prefix}-${faVariant.iconName} not found`);
    }
  }

  if (customVariant) {
    if (customVariant.iconName === 'exclamation') {
      CustomIcon = <ExclamationIcon color={customVariant.color} />;
    } else {
      throw new Error(`Unknown custom icon name: ${customVariant.iconName}`);
    }
  }

  return (
    <Wrapper severity={severity} inline={inline} hasRoundedCorners={hasRoundedCorners} {...rest} theme={theme}>
      <IconWrapper severity={severity} theme={theme}>
        {IconComponent ? <IconComponent /> : null}
        {iconDefinition ? <Icon variant={iconDefinition} /> : null}
        {customVariant ? CustomIcon : null}
        {onRequestClose && (
          <CrossButton onClick={onRequestClose} styling="link" aria-label="Close alert banner">
            <Icon color={text} variant={faTimes} data-automation="ZA.alert-cross-icon" size="xs" />
          </CrossButton>
        )}
      </IconWrapper>
      <div className={onRequestClose ? 'pr-4' : ''}>{children}</div>
    </Wrapper>
  );
};

export default Alert;
