import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants';
import { getInputTextColor, getBorderColorByStatus } from '../../../helpers/utils';
import { InputProps } from '../../types';
import { useThemeContext, AppThemeProps } from '../../styles/Theme';

interface InputThemeProps extends AppThemeProps, InputProps {}

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.span<InputThemeProps>`
  position: absolute;
  top: 1px;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }: InputThemeProps) => theme.input.iconWidth};
  color: ${({ theme }: InputThemeProps) => theme.input.iconColor};
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

const Input = styled.input<InputThemeProps>`
  width: 100%;
  -webkit-appearance: none;
  outline: none;
  border-radius: ${({ theme }: InputThemeProps) => theme.input.borderRadius};
  height: 50px;
  padding: ${({ theme }: InputThemeProps) => theme.input.padding};
  padding-left: ${({ startIcon, theme }: InputThemeProps) =>
    startIcon && theme.input.startIcon ? theme.input.startIconPaddingLeft : null};
  padding-right: ${({ endIcon, theme }: InputThemeProps) => endIcon && theme.input.endIconPaddingRight};
  font-size: ${({ theme, fontSize = 'body' }: InputThemeProps) => theme.typography.text.sizes[fontSize]};
  font-weight: ${({ theme, fontWeight = 'regular' }: InputThemeProps) => theme.typography.weights[fontWeight]};
  color: ${getInputTextColor};
  border: 1px solid ${getBorderColorByStatus};
  box-shadow: 0 0 4px 0 transparent;
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  font-family: ${({ theme }: InputThemeProps) => theme.typography.primary};

  &:hover,
  &:focus {
    border: 1px solid
      ${({ hasError, theme }: InputThemeProps) => (hasError ? theme.input.hover.error : theme.input.hover.border)};
    box-shadow: ${({ hasError, theme }) =>
      hasError
        ? `${theme.input.hover.boxShadow} ${theme.input.hover.error}`
        : `${theme.input.hover.boxShadow} ${theme.input.hover.border}`};
    background-color: ${({ theme }: InputThemeProps) => theme.input.hover.backgroundColor};
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
    background-color: ${({ theme }: InputThemeProps) => theme.input.disabled.backgroundColor ?? colors.greyLightest};
    cursor: not-allowed;
  }
`;

const InputText = forwardRef<HTMLInputElement, InputProps>(({ startIcon, endIcon, className, ...rest }, ref) => {
  const theme = useThemeContext();

  return (
    <InputWrapper className={className}>
      {startIcon ? (
        <IconWrapper startIcon={startIcon} theme={theme}>
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
