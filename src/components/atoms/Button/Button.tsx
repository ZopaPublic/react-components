import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  contrastColor?: string;
  fullWidth?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  sizing?: TSizing;
  styling?: TStyling;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
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

const defaultButtonProps: Partial<IButtonProps> = {
  sizing: 'default',
  styling: 'primary',
};

const smallInset = 'inset 0 0 0 2px';
const largeInset = 'inset 0 0 0 4px';

const fontColors: Partial<TButtonStylingMapping> = {
  alert: colors.white,
  contrastLink: colors.white,
  contrastSecondary: colors.white,
  link: colors.actionPlain,
  primary: colors.white,
  secondary: colors.greyDark,
  warning: colors.greyDarkest,
};

const backgroundColors: TButtonStylingMapping = {
  alert: colors.alert,
  contrastLink: 'transparent',
  contrastPrimary: colors.white,
  contrastSecondary: 'transparent',
  link: 'transparent',
  primary: colors.action,
  secondary: colors.greyLighter,
  warning: colors.warning,
};

const activeBackgroundColors: Partial<TButtonStylingMapping> = {
  contrastSecondary: 'transparent',
  secondary: colors.action,
};

const boxShadows: Partial<TButtonStylingMapping> = {
  contrastSecondary: `${smallInset} ${colors.white}`,
  secondary: `${smallInset} ${colors.action}`,
};

const activeBoxShadows: Partial<TButtonStylingMapping> = {
  alert: `${smallInset} ${colors.alert}, ${largeInset} ${colors.white}`,
  contrastPrimary: `${smallInset} ${colors.white}, ${largeInset} ${colors.action}`,
  contrastSecondary: `${smallInset} ${colors.white}`,
  primary: `${smallInset} ${colors.action}, ${largeInset} ${colors.white}`,
  secondary: `${largeInset} ${colors.action}`,
  warning: `${smallInset} ${colors.warning}, ${largeInset} ${colors.greyDarkest}`,
};

const hoverFontColors: Partial<TButtonStylingMapping> = {
  secondary: colors.greyDark,
};

const fontSizes: TButtonSizingMapping = {
  compact: '14px',
  default: '16px',
  large: '20px',
  small: '16px',
};

const paddings: TButtonSizingMapping = {
  compact: '6px 16px',
  default: '14px 32px',
  large: '14px 32px',
  small: '10px 24px',
};

const SText = styled.span<IButtonProps>`
  display: block;
  margin-right: ${({ rightIcon }) => !!rightIcon && '8px'};
  margin-left: ${({ leftIcon }) => !!leftIcon && '8px'};
`;

export const buttonStyle = css<IButtonProps>`
  text-decoration: none;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth = false }) => fullWidth && '100%'};
  padding: ${({ sizing = 'default' }) => paddings[sizing]};
  font-family: ${typography.primary};
  font-size: ${({ sizing = 'default' }) => fontSizes[sizing]};
  line-height: 1.2;
  font-weight: ${typography.weights.semibold};
  cursor: pointer;
  border: 1px solid ${({ styling = 'primary' }) => backgroundColors[styling]};
  border-radius: 8px;
  color: ${({ contrastColor }) => contrastColor};
  color: ${({ styling = 'primary', contrastColor }) => (contrastColor ? contrastColor : fontColors[styling])};
  background: ${({ styling = 'primary' }) => backgroundColors[styling]};
  transition: all 140ms ease-in-out;

  &:not(:disabled) {
    box-shadow: ${({ styling = 'primary' }) => boxShadows[styling] || 'none'};
  }

  &:active:not(:disabled),
  &:focus:not(:disabled) {
    box-shadow: ${({ styling = 'primary' }) => activeBoxShadows[styling]};
    ${({ styling }) => (styling === 'contrastLink' || styling === 'link' ? null : 'outline: none')};
  }

  &:hover:not(:disabled) {
    color: ${({ styling = 'primary' }) => hoverFontColors[styling]};
    background-color: ${({ styling = 'primary' }) => activeBackgroundColors[styling]};
    box-shadow: ${({ styling }) => (styling === 'contrastSecondary' ? activeBoxShadows[styling] : 'none')};
  }

  &:active:not(:disabled) {
    opacity: 0.4;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const SButton = styled.button<IButtonProps>`
  ${buttonStyle}
`;

const Button: React.FC<IButtonProps> = props => {
  const { children, leftIcon, rightIcon, ...rest } = props;

  return (
    <SButton {...rest}>
      {leftIcon || rightIcon ? (
        <>
          {!!leftIcon && leftIcon}
          <SText rightIcon={rightIcon} leftIcon={leftIcon}>
            {children}
          </SText>
          {!!rightIcon && rightIcon}
        </>
      ) : (
        children
      )}
    </SButton>
  );
};

Button.defaultProps = defaultButtonProps;
SButton.defaultProps = defaultButtonProps;

export default Button;
