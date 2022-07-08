import Spinner from '../Spinner/Spinner';
import styled, { css } from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';
import { AppTheme, useThemeContext } from '../../styles/Theme';
import { colors, spacing, typography } from '../../../constants';

export type Styling = 'primary' | 'secondary' | 'link';

type BaseButtonProps = {
  styling?: Styling;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export type ButtonProps<T = ButtonHTMLAttributes<HTMLButtonElement>> = BaseButtonProps & T;

const colorMap = {
  primary: {
    text: colors.white,
    bg: colors.action,
    hover: `linear-gradient(90deg, #3B46C4 0%, #2732B0 100%)`,
  },
  secondary: {
    text: colors.actionDark,
    bg: colors.actionLight,
    hover: '#EEEFFB',
  },
  link: {
    text: colors.actionDark,
    bg: 'transparent',
    hover: '#EAEBFA',
  },
};

export const buttonStyle = css<BaseButtonProps>`
  outline: 0;
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  text-decoration: none;
  box-sizing: border-box;
  justify-content: center;
  padding: ${spacing[3]} ${spacing[6]};
  width: ${({ fullWidth = false }) => fullWidth && '100%'};

  &:focus:not(:active) {
    border: 1px solid ${colors.white};
    box-shadow: 0 0 4px ${colors.actionPlain};
  }

  ${({ styling = 'primary', theme }) => {
    const { borderRadius, text } = theme?.button || {};
    const { size, height, weight } = text || {};
    const { primary, letterSpacingMap } = theme?.typography || {};
    const { text: textColor, border, bg: bgColor } = theme?.button?.[styling] || {};
    const backGround = bgColor ?? colorMap[styling].bg;
    const isActionGradient = backGround === colors.action;
    const bgFallback = css`
      background-color: ${colors.actionPlain};
    `;

    return css`
      background: ${backGround};
      border-radius: ${borderRadius ?? '8px'};
      border: ${border ?? '1px solid transparent'};
      font-family: ${primary ?? typography.primary};
      color: ${textColor ?? colorMap[styling].text};
      font-size: ${size ?? typography.sizes.text.body};
      font-weight: ${weight ?? typography.weights.semiBold};
      line-height: ${height ?? typography.sizes.lineHeight.body};
      letter-spacing: ${letterSpacingMap?.button ?? 0};
      ${isActionGradient && bgFallback};
    `;
  }}

  ${({ disabled, styling = 'primary', theme }) => {
    const { hover } = theme?.button?.[styling] || {};
    const { bg, text, border } = theme?.button?.[styling]?.disabled || {};
    const disabledStyles = css<BaseButtonProps>`
      cursor: not-allowed;
      ${({ loading }) => {
        if (!loading) {
          return css`
            color: ${text ?? colors.greyDark};
            background: ${bg ?? colors.greyLightest};
            border: ${border ?? '1px solid transparent'};
          `;
        }
      }}
    `;
    const enabledStyles = css`
      &:active {
        opacity: 0.8;
        box-shadow: unset;
        border: 1px solid transparent;
      }
      &:hover {
        background: ${hover ?? colorMap[styling].hover};
      }
    `;
    return disabled ? disabledStyles : enabledStyles;
  }}
`;

// This wrapper is to prevent html attribute warnings. See: https://styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings
const ButtonWrapper = ({ loading, fullWidth, ...props }: ButtonProps & { theme: AppTheme }) => <button {...props} />;

const StyledWrapper = styled(ButtonWrapper)`
  ${buttonStyle}
`;

const Button = ({ children, loading, styling = 'primary', disabled, ...rest }: ButtonProps) => {
  const theme = useThemeContext();
  const isLoading = styling !== 'link' ? loading : undefined;

  return (
    <StyledWrapper styling={styling} loading={isLoading} disabled={isLoading || disabled} {...rest} theme={theme}>
      {isLoading && (
        <>
          <Spinner styling={styling === 'primary' ? 'negative' : 'secondary'} size="small" /> {'\u00A0 '}
        </>
      )}
      {children}
    </StyledWrapper>
  );
};

export default Button;
