import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';

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

const smallBorder = '1px solid';
const largeBorder = '2px solid';
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

const borders: TButtonStylingMapping = {
  alert: `${smallBorder} ${colors.semantic.error}`,
  contrastLink: `${smallBorder} transparent`,
  contrastPrimary: `${smallBorder} ${colors.neutral.white}`,
  contrastSecondary: `${largeBorder} ${colors.neutral.white}`,
  link: `${smallBorder} transparent`,
  primary: `${smallBorder} ${colors.base.secondary}`,
  secondary: `${largeBorder} ${colors.base.secondary}`,
  warning: `${smallBorder} ${colors.semantic.alert}`,
};

const activeBackgroundColors: Partial<TButtonStylingMapping> = {
  contrastSecondary: 'transparent',
  secondary: colors.base.secondary,
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
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  padding: ${({ sizing }) => paddings[sizing]};
  font-family: ${typography.primary};
  font-size: ${({ sizing }) => fontSizes[sizing]};
  line-height: 1.2;
  font-weight: ${typography.weights.semibold};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid transparent;
  border-radius: 8px;
  color: ${({ contrastColor }) => contrastColor};
  color: ${({ styling }) => fontColors[styling]};
  background-color: ${({ styling }) => backgroundColors[styling]};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  transition: all 140ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: ${({ styling }) => borders[styling]};
    border-radius: 8px;
  }

  ${({ disabled, styling }) =>
    !disabled &&
    `
    &:active,
    &:focus {
      box-shadow: ${activeBoxShadows[styling]};
      ${styling === 'contrastLink' || styling === 'link' ? null : 'outline: none'};
    }
    
    &:hover {
      opacity: 0.8;
      color: ${hoverFontColors[styling]};
      background-color: ${activeBackgroundColors[styling]};
      box-shadow: ${styling === 'contrastSecondary' ? activeBoxShadows[styling] : 'none'};
    }
    
    &:active {
      opacity: 0.4;
    }
  `};
`;

const Button: React.FunctionComponent<IButtonProps> = props => {
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

Button.defaultProps = {
  fullWidth: false,
  sizing: 'default',
  styling: 'primary',
};

export default Button;
