import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors, typography, spacing } from '../../../constants';
import Spinner from '../Spinner/Spinner';

export type Styling = 'primary' | 'secondary' | 'link';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  styling?: Styling;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

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

export const buttonStyle = css<ButtonProps>`
  text-decoration: none;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth = false }) => fullWidth && '100%'};
  padding: ${spacing[3]} ${spacing[6]};
  font-family: ${typography.primary};
  font-size: ${typography.sizes.text.body};
  line-height: ${typography.sizes.lineHeight.body};
  font-weight: ${typography.weights.semiBold};
  cursor: pointer;
  border-radius: 8px;
  color: ${({ styling = 'primary' }) => colorMap[styling].text};
  border: 1px solid transparent;
  outline: 0;

  ${({ styling = 'primary' }) => {
    const { bg } = colorMap[styling];
    const isActionGradient = bg === colors.action;
    const bgFallback = css`
      background-color: ${colors.actionPlain};
    `;

    return css`
      ${isActionGradient && bgFallback}
      background: ${bg};
    `;
  }}

  &:focus:not(:active) {
    border: 1px solid ${colors.white};
    box-shadow: 0 0 4px ${colors.actionPlain};
  }

  ${({ disabled, styling = 'primary' }) => {
    const disabledStyles = css<ButtonProps>`
      cursor: not-allowed;
      ${({ loading }) => {
        if (!loading) {
          return css`
            background: ${colors.greyLightest};
            color: ${colors.grey};
          `;
        }
      }}
    `;
    const enabledStyles = css`
      &:hover {
        background: ${colorMap[styling].hover};
      }

      &:active {
        border: 1px solid transparent;
        box-shadow: unset;
        opacity: 0.8;
      }
    `;
    return disabled ? disabledStyles : enabledStyles;
  }}
`;

// This wrapper is to prevent html attribute warnings. See: https://styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings
const ButtonWrapper = ({ loading, fullWidth, ...props }: ButtonProps) => <button {...props} />;

const StyledWrapper = styled(ButtonWrapper)`
  ${buttonStyle}
`;

const Button: React.FC<ButtonProps> = ({ children, loading, styling = 'primary', disabled, ...rest }) => {
  const isLoading = styling !== 'link' ? loading : undefined;

  return (
    <StyledWrapper styling={styling} loading={isLoading} disabled={isLoading || disabled} {...rest}>
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
