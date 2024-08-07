import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconLookup, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/Icon';
import { colors, typography } from '../../../constants';
import { useThemeContext } from '../../styles/Theme';
import CircleExclamationIcon from '../../styles/icons/circleExclamation';
import Button from '../Button/Button';
import HiddenText from '../HiddenText/HiddenText';
import InfoCircleIcon from '../../styles/icons/infoCircle';
import TriangleExclamationIcon from '../../styles/icons/triangleExclamation';

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
  padding: ${({ severity, theme }) => theme.alert[severity].padding ?? '8px 12px 8px 12px'};
  background: ${({ severity, theme }) => theme.alert[severity].background || colors.greyLighter};
  color: ${({ severity, theme }) => theme.alert[severity].text || colors.greyDarkest};
  font-size: ${({ theme }) => theme.typography.text.sizes.body ?? typography.sizes.text.body};
  line-height: ${({ theme }) => theme.typography.lineHeight.body ?? typography.sizes.lineHeight.body};
  font-family: ${({ theme }) => theme.typography.primary ?? typography.primary};
  font-weight: ${({ severity, theme }) => theme.alert[severity].fontWeight ?? '400'};
  border-radius: ${({ severity, theme, hasRoundedCorners }) =>
    theme.alert[severity].borderRadius ? theme.alert[severity].borderRadius : hasRoundedCorners ? '4px' : '0px'};
  border: ${({ severity, theme }) => theme.alert[severity].border || 'none'};
  border-left: ${({ severity, theme }) => theme.alert[severity].borderLeft};
  a {
    color: ${({ severity, theme }) => theme.alert[severity].text} !important;
    font-size: 16px;
    line-height: 20px;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

const IconWrapper = styled.div<{ severity: Severity }>`
  margin-right: ${({ severity, theme }) => theme.alert[severity].marginRight ?? '8px'};
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

  const iconMap = {
    'circle-exclamation': CircleExclamationIcon,
    'triangle-exclamation': TriangleExclamationIcon,
    'info-circle': InfoCircleIcon,
  };

  if (customVariant) {
    const IconComponent = iconMap[customVariant.iconName];
    if (IconComponent) {
      CustomIcon = <IconComponent color={customVariant.color} />;
    } else {
      throw new Error(`Unknown custom icon name: ${customVariant.iconName}`);
    }
  }

  let hiddenText;
  if (!severity || severity == 'brand' || severity == 'info') {
    hiddenText = 'information';
  } else {
    hiddenText = severity;
  }

  return (
    <Wrapper severity={severity} inline={inline} hasRoundedCorners={hasRoundedCorners} {...rest} theme={theme}>
      <HiddenText>{hiddenText}</HiddenText>
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
      <div role="status" className={onRequestClose ? 'pr-4' : ''}>
        {children}
      </div>
    </Wrapper>
  );
};

export default Alert;
