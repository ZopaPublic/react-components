import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import { statusColors } from '../../../constants/colors';
import { openSans } from '../../../constants/fonts';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  contrastColor?: string;
  fullWidth?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  sizing?: TSizing;
  styling?: TStyling;
}

export type TStyling =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'alert'
  | 'link'
  | 'contrastPrimary'
  | 'contrastSecondary'
  | 'contrastLink';

export type TSizing = 'default' | 'large' | 'small' | 'compact';

export type TButtonStylingMapping = { [key in TStyling]: string };
export type TButtonSizingMapping = { [key in TSizing]: string };

const smallInset = 'inset 0 0 0 2px';
const largeInset = 'inset 0 0 0 4px';

const fontColors: Partial<TButtonStylingMapping> = {
  alert: colors.base.white,
  contrastLink: colors.base.white,
  contrastSecondary: colors.base.white,
  link: colors.primary.blue500,
  primary: colors.base.white,
  secondary: colors.primary.blue500,
  warning: colors.alert.alerty900,
};

const backgroundColors: TButtonStylingMapping = {
  alert: statusColors.error,
  contrastLink: 'transparent',
  contrastPrimary: colors.base.white,
  contrastSecondary: 'transparent',
  link: 'transparent',
  primary: colors.primary.blue500,
  secondary: 'transparent',
  warning: colors.alert.alerty500,
};

const activeBackgroundColors: Partial<TButtonStylingMapping> = {
  contrastSecondary: colors.base.white,
  secondary: colors.primary.blue500,
};

const boxShadows: Partial<TButtonStylingMapping> = {
  contrastSecondary: `${smallInset} ${colors.base.white}`,
  secondary: `${smallInset} ${colors.extended.blue100}`,
};

const activeBoxShadows: Partial<TButtonStylingMapping> = {
  alert: `${smallInset} ${statusColors.error}, ${largeInset} ${colors.base.white}`,
  contrastPrimary: `${smallInset} ${colors.base.white}, ${largeInset} ${colors.extended.navy700}`,
  contrastSecondary: `${largeInset} ${colors.base.white}`,
  primary: `${smallInset} ${colors.extended.blue500}, ${largeInset} ${colors.base.white}`,
  secondary: `${largeInset} ${colors.primary.blue500}`,
  warning: `${smallInset} ${colors.alert.alerty500}, ${largeInset} ${colors.alert.alerty900}`,
};

const hoverFontColors: Partial<TButtonStylingMapping> = {
  secondary: colors.base.white,
};

const fontSizes: TButtonSizingMapping = {
  compact: '14px',
  default: '16px',
  large: '20px',
  small: '16px',
};

const paddings: TButtonSizingMapping = {
  compact: '4px 16px',
  default: '12px 32px',
  large: '12px 32px',
  small: '8px 24px',
};

const SText = styled.span<IButtonProps>`
  display: block;
  margin-right: ${({ rightIcon }) => !!rightIcon && '8px'};
  margin-left: ${({ leftIcon }) => !!leftIcon && '8px'};
`;

const SButton = styled.button<IButtonProps>`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.fullWidth && '100%'};
  padding: ${({ sizing }) => sizing && paddings[sizing]};
  font-family: ${openSans};
  font-size: ${({ sizing }) => sizing && fontSizes[sizing]};
  line-height: ${({ sizing }) => (sizing === 'large' ? '30px' : '24px')};
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 48px;
  color: ${({ contrastColor }) => contrastColor};
  color: ${({ styling }) => styling && fontColors[styling]};
  background-color: ${({ styling }) => styling && backgroundColors[styling]};
  transition: all 140ms ease-in-out;

  &:enabled {
    box-shadow: ${({ styling }) => (styling && boxShadows[styling]) || 'none'};
  }

  &:hover:enabled {
    opacity: 0.8;
    color: ${props => props.contrastColor};
    color: ${({ styling }) => styling && hoverFontColors[styling]};
    background-color: ${({ styling }) => styling && activeBackgroundColors[styling]};
    box-shadow: none;
  }

  &:active:enabled,
  &:focus:enabled {
    box-shadow: ${({ styling }) => styling && activeBoxShadows[styling]};
    ${({ styling }) => (styling === 'contrastLink' || styling === 'link' ? null : 'outline: none')};
  }

  &:active:enabled {
    opacity: 0.4;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.neutral.neutral500};
    background-color: ${colors.neutral.neutral100};
  }
`;

const Button: React.FunctionComponent<IButtonProps> = props => {
  const { children, leftIcon, rightIcon, ...rest } = props;

  return (
    <SButton {...rest}>
      {!!leftIcon && leftIcon}
      <SText rightIcon={rightIcon} leftIcon={leftIcon}>
        {children}
      </SText>
      {!!rightIcon && rightIcon}
    </SButton>
  );
};

Button.defaultProps = {
  fullWidth: false,
  sizing: 'default',
  styling: 'primary',
};

export default Button;
