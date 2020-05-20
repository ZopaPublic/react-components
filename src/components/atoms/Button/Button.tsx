import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import { spacing } from '../../../constants/spacing';
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
  padding: ${spacing[4]} ${spacing[6]};
  font-family: ${typography.primary};
  font-size: ${typography.sizes.text.body};
  line-height: 1.2;
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

  &:hover:not(:disabled) {
    background: ${({ styling = 'primary' }) => colorMap[styling].hover};
  }

  &:focus:not(:active) {
    border: 1px solid ${colors.white};
    box-shadow: 0 0 4px ${colors.actionPlain};
  }

  &:disabled {
    cursor: not-allowed;
    ${({ loading }) => {
      if (!loading) {
        return css`
          background: ${colors.greyLightest};
          color: ${colors.grey};
        `;
      }
    }}
  }

  &:active:not(:disabled) {
    border: 1px solid transparent;
    box-shadow: unset;
    opacity: 0.8;
  }
`;

const ButtonWrapper = styled.button<ButtonProps>`
  ${buttonStyle}
`;

const Button: React.FC<ButtonProps> = props => {
  const { children, loading, styling = 'primary', disabled, ...rest } = props;
  const isLoading = styling !== 'link' && loading;

  return (
    <ButtonWrapper styling={styling} loading={isLoading} disabled={isLoading || disabled} {...rest}>
      {isLoading && (
        <>
          <Spinner negative={styling === 'primary'} size="small" /> {'\u00A0 '}
        </>
      )}
      {children}
    </ButtonWrapper>
  );
};

export default Button;
