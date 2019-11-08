import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
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

const smallInset = 'inset 0 0 0 2px';
const largeInset = 'inset 0 0 0 4px';

const fontColors: Partial<TButtonStylingMapping> = {
  alert: colors.neutral.white,
  contrastLink: colors.neutral.white,
  contrastSecondary: colors.neutral.white,
  link: colors.base.secondary,
  primary: colors.neutral.white,
  secondary: colors.base.secondary,
  warning: colors.neutral.dark,
};

const backgroundColors: TButtonStylingMapping = {
  alert: colors.semantic.error,
  contrastLink: 'transparent',
  contrastPrimary: colors.neutral.white,
  contrastSecondary: 'transparent',
  link: 'transparent',
  primary: colors.base.secondary,
  secondary: 'transparent',
  warning: colors.semantic.alert,
};

const activeBackgroundColors: Partial<TButtonStylingMapping> = {
  contrastSecondary: 'transparent',
  secondary: colors.base.secondary,
};

const boxShadows: Partial<TButtonStylingMapping> = {
  contrastSecondary: `${smallInset} ${colors.neutral.white}`,
  secondary: `${smallInset} ${colors.base.secondary}`,
};

const activeBoxShadows: Partial<TButtonStylingMapping> = {
  alert: `${smallInset} ${colors.semantic.error}, ${largeInset} ${colors.neutral.white}`,
  contrastPrimary: `${smallInset} ${colors.neutral.white}, ${largeInset} ${colors.base.secondary}`,
  contrastSecondary: `${smallInset} ${colors.neutral.white}`,
  primary: `${smallInset} ${colors.base.secondary}, ${largeInset} ${colors.neutral.white}`,
  secondary: `${largeInset} ${colors.base.secondary}`,
  warning: `${smallInset} ${colors.semantic.alert}, ${largeInset} ${colors.neutral.dark}`,
};

const hoverFontColors: Partial<TButtonStylingMapping> = {
  secondary: colors.neutral.white,
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

const SButton = styled.button<IButtonProps>`
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
  background-color: ${({ styling = 'primary' }) => backgroundColors[styling]};
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
    opacity: 0.8;
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

export default Button;
