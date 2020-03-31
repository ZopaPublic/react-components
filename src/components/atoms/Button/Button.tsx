import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import { shadeHexColor } from '../../../helpers/utils';
import Spinner from '../Spinner/Spinner';

export type TStyling = 'primary' | 'secondary' | 'link';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  styling?: TStyling;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
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
    hover: shadeHexColor(colors.actionLight, 0.24),
  },
  link: {
    text: colors.actionDark,
    bg: 'transparent',
    hover: shadeHexColor(colors.actionLight, 0.24),
  },
};

export const buttonStyle = css<IButtonProps>`
  text-decoration: none;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth = false }) => fullWidth && '100%'};
  padding: 15px 25px;
  font-family: ${typography.primary};
  font-size: ${typography.sizes.text};
  line-height: 1.2;
  font-weight: ${typography.weights.semibold};
  cursor: pointer;
  border-radius: 8px;
  color: ${({ styling = 'primary' }) => colorMap[styling].text};
  border: none;

  ${({ styling = 'primary' }) => {
    const { bg } = colorMap[styling];
    const isActionGradient = bg === colors.action;
    const bgFallback = `background-color: ${colors.actionPlain}`;

    return css`
      ${isActionGradient && bgFallback}
      background: ${bg};
    `;
  }}

  &:hover:not(:disabled) {
    background: ${({ styling = 'primary' }) => colorMap[styling].hover};
  }

  &:active:not(:disabled) {
    opacity: 0.8;
  }

  &:focus:not(:disabled) {
    border: 1px solid ${colors.white};
    box-shadow: 0 0 4px ${colors.actionPlain};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${colors.greyLightest};
    color: ${colors.grey};
  }
`;

const SButton = styled.button<IButtonProps>`
  ${buttonStyle}
`;

const Button: React.FC<IButtonProps> = props => {
  const { children, leftIcon, rightIcon, loading, styling = 'primary', ...rest } = props;
  const isLoading = styling !== 'link' && loading;

  return (
    <SButton styling={styling} {...rest}>
      {isLoading && <Spinner negative={styling === 'primary'} small />}
      {'\u00A0 '}
      {children}
    </SButton>
  );
};

export default Button;
