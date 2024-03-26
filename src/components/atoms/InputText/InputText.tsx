import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants';
import { getInputTextColor, getBorderColorByStatus } from '../../../helpers/utils';
import { InputProps } from '../../types';
import { useThemeContext, AppTheme } from '../../styles/Theme';

type IconWrapperProps = {
  startIcon?: boolean;
  /**
   * The weight of the rendered text.
   * @default 'regular'
   */
  weight?: keyof AppTheme['typography']['weights'];
  /**
   * The size you want to render your text at, currently only `13px` | `15px` and `18px` supported.
   * @default 'body'
   */
  size?: keyof AppTheme['typography']['text']['sizes'];
};

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.span<IconWrapperProps & { theme: AppTheme }>`
  position: absolute;
  top: 1px;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  color: ${({ theme }) => theme.input.iconColor};
  ${({ startIcon }) =>
    startIcon
      ? css`
          left: 1px;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        `
      : css`
          right: 1px;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        `}
  background-color: ${({ startIcon, theme }) => startIcon && theme.input.iconBackgroundColor};
`;

const Input = styled.input<InputProps & { theme: AppTheme }>`
  width: 100%;
  -webkit-appearance: none;
  outline: none;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  height: 50px;
  padding: 0 16px;
  padding-left: ${({ startIcon }) => !!startIcon && '60px'};
  padding-right: ${({ endIcon }) => !!endIcon && '60px'};
  font-size: ${({ theme, fontSize = 'body' }) => theme.typography.text.sizes[fontSize]};
  font-weight: ${({ theme, fontWeight = 'regular' }) => theme.typography.weights[fontWeight]};
  color: ${getInputTextColor};
  border: 1px solid ${getBorderColorByStatus};
  box-shadow: 0 0 4px 0 transparent;
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  font-family: ${({ theme }) => theme.typography.primary};

  &:hover {
    border: 1px solid ${({ hasError, theme }) => (hasError ? theme.input.hover.error : theme.input.hover.border)};
    box-shadow: ${({ theme }) => theme.input.hover.boxShadow};
  }

  &:focus {
    border: 1px solid ${({ hasError, theme }) => (hasError ? theme.input.focus.error : theme.input.focus.border)};
    box-shadow: ${({ hasError, theme }) =>
      `${theme.input.focus.boxShadow} ${hasError ? theme.input.focus.error : theme.input.focus.border}`};
  }

  &::placeholder {
    /* Firefox applies by default 0.5 opacity to the placeholder, 'normalize.css' stopped normalising this due to a Microsoft Edge bug */
    /* @see https://github.com/necolas/normalize.css/issues/741  */
    color: ${(props) => props.theme.input.placeholderColor};
    opacity: 1;
  }

  &:disabled {
    -webkit-text-fill-color: ${colors.grey};
    opacity: 1;
    border: 1px solid ${getBorderColorByStatus};
    box-shadow: 0 0 4px 0 transparent;
    background-color: ${colors.greyLightest};
    cursor: not-allowed;
  }
`;

const InputText = forwardRef<HTMLInputElement, InputProps>(({ startIcon, endIcon, className, ...rest }, ref) => {
  const theme = useThemeContext();

  return (
    <InputWrapper className={className}>
      {startIcon ? (
        <IconWrapper startIcon theme={theme}>
          {startIcon}
        </IconWrapper>
      ) : null}
      <Input startIcon={startIcon} endIcon={endIcon} {...rest} ref={ref} theme={theme} />
      {endIcon ? (
        <IconWrapper startIcon={false} theme={theme}>
          {endIcon}
        </IconWrapper>
      ) : null}
    </InputWrapper>
  );
});

export default InputText;
