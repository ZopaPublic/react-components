import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { colors, typography } from '../../../constants';
import { getBorderColorByStatus, getInputTextColor } from '../../../helpers/utils';
import { InputProps } from '../../types';

type IconWrapperProps = {
  startIcon?: boolean;
};

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.span<IconWrapperProps>`
  position: absolute;
  top: 1px;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  color: ${colors.grey};
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
  background-color: ${({ startIcon }) => startIcon && colors.greyLighter};
`;

const Input = styled.input<InputProps>`
  width: 100%;
  -webkit-appearance: none;
  outline: none;
  border-radius: 8px;
  height: 50px;
  padding: 0 16px;
  padding-left: ${({ startIcon }) => !!startIcon && '60px'};
  padding-right: ${({ endIcon }) => !!endIcon && '60px'};
  font-size: ${typography.sizes.text.body};
  font-weight: ${typography.weights.regular};
  color: ${getInputTextColor}
  border: 1px solid ${getBorderColorByStatus};
  box-shadow: 0 0 4px 0 transparent;
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;

  &:focus, &:hover {
    border: 1px solid ${colors.brand};
    box-shadow: 0 0 4px 0 ${colors.brand};
  }

  &::placeholder {
    /* Firefox applies by default 0.5 opacity to the placeholder, 'normalize.css' stopped normalising this due to a Microsoft Edge bug */
    /* @see https://github.com/necolas/normalize.css/issues/741  */
    color: ${colors.greyLight};
    opacity: 1;
  }

  &:disabled {
    border: 1px solid ${getBorderColorByStatus};
    box-shadow: 0 0 4px 0 transparent;
    background-color: transparent;
    cursor: not-allowed;
  }
`;

const InputText = forwardRef<HTMLInputElement, InputProps>(({ startIcon, endIcon, className, ...rest }, ref) => (
  <InputWrapper className={className}>
    {startIcon && <IconWrapper startIcon>{startIcon}</IconWrapper>}
    <Input startIcon={startIcon} endIcon={endIcon} {...rest} ref={ref} />
    {endIcon && <IconWrapper startIcon={false}>{endIcon}</IconWrapper>}
  </InputWrapper>
));

export default InputText;
