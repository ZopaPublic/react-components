import React, { FC } from 'react';
import styled from 'styled-components';
import {
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faMinusCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/Icon';
import { colors, typography } from '../../../constants';

type Severity = 'info' | 'alert' | 'warning' | 'success' | 'brand';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  severity?: Severity;
  inline?: boolean;
  hasRoundedCorners?: boolean;
  /**
   * if present it shows the "x" icon
   */
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;
}

type AlertElementsBySeverity = Record<
  Severity,
  {
    icon: string;
    background: string;
    text: string;
    component: FC;
  }
>;

const MAP_BY_SEVERITY: AlertElementsBySeverity = {
  brand: {
    icon: colors.brand,
    background: colors.brandLight,
    text: colors.greyDarkest,
    component: () => <Icon variant={faInfoCircle} />,
  },
  info: {
    icon: colors.grey,
    background: colors.greyLighter,
    text: colors.greyDarkest,
    component: () => <Icon variant={faInfoCircle} />,
  },
  alert: {
    icon: colors.alert,
    background: colors.alertLight,
    text: colors.alertDark,
    component: () => <Icon variant={faMinusCircle} />,
  },
  warning: {
    icon: colors.warning,
    background: colors.warningLight,
    text: colors.warningDark,
    component: () => <Icon variant={faExclamationCircle} />,
  },
  success: {
    icon: colors.success,
    background: colors.successLight,
    text: colors.successDark,
    component: () => <Icon variant={faCheckCircle} />,
  },
};

const Wrapper = styled.div<{ severity: Severity; inline: boolean; hasRoundedCorners: boolean }>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  position: relative;
  padding: 8px 16px 8px 16px;
  background: ${({ severity }) => MAP_BY_SEVERITY[severity].background};
  color: ${({ severity }) => MAP_BY_SEVERITY[severity].text};
  font-size: ${typography.sizes.text.body};
  line-height: ${typography.sizes.lineHeight.body};
  font-family: ${typography.primary};
  font-weight: 400;
  border-radius: ${({ hasRoundedCorners }) => (hasRoundedCorners ? 4 : 0)}px;

  a {
    color: ${({ severity }) => MAP_BY_SEVERITY[severity].text} !important;
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
  font-size: 20px;
  color: ${({ severity }) => MAP_BY_SEVERITY[severity].icon};

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
  const { component: Icon, text } = MAP_BY_SEVERITY[severity];

  return (
    <Wrapper severity={severity} inline={inline} hasRoundedCorners={hasRoundedCorners} {...rest}>
      <IconWrapper severity={severity}>
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
