import React, { forwardRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors, typography } from '../../../constants';
import tealCheckMark from '../../../content/images/teal-check-mark.svg';
import greenCheckMark from '../../../content/images/green-check-mark.svg';
import unbrandedTick from '../../../content/images/unbranded-tick.svg';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { FieldProps, InputProps, GroupingControlsProps } from '../../types';
import { AppTheme, AppThemeProps, useThemeContext } from '../../styles/Theme';

export interface CheckboxFieldProps
  extends FieldProps,
    GroupingControlsProps,
    Omit<InputProps, 'startIcon' | 'endIcon'> {}

const getCheckedColor = ({ disabled, isValid, theme }: Pick<InputProps, 'disabled' | 'isValid'> & AppThemeProps) => {
  if (isValid) {
    return theme.input.borderColorByStatus.valid;
  }
  if (disabled) {
    return theme.input.borderColorByStatus.disabled;
  }
  return theme.input.checkBox.defaultColor;
};

const getTickIcon = ({ isValid, theme }: Pick<InputProps, 'disabled' | 'isValid'> & AppThemeProps) => {
  if (theme.input.checkBox.customIcon) {
    return unbrandedTick;
  }
  if (isValid) {
    return greenCheckMark;
  }
  return tealCheckMark;
};

const zoomOut = keyframes`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`;

const Label = styled(InputLabel)<Pick<InputProps, 'disabled' | 'hasError' | 'isValid'> & { theme: AppTheme }>`
  width: auto;
  display: flex;
  text-align: left;
  font-weight: ${typography.weights.regular};
  font-size: ${typography.sizes.text.body};
  padding: 14px 16px;
  border: 1px solid ${getBorderColorByStatus};
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.input.checkBox.label.borderRadius};
  line-height: 1.4;
  color: ${colors.greyDarkest};
  position: relative;
  user-select: none;
  margin-bottom: 0;

  &:before {
    content: '';
    flex-shrink: 0;
    background-color: ${colors.white};
    border-radius: ${({ theme }) => theme.input.checkBox.borderRadius};
    height: 20px;
    width: 20px;
    margin-right: 8px;
    transition-property: border, box-shadow;
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 4px 0 transparent;
    border: 1px ${getBorderColorByStatus} solid;
    display: block;
  }
  &:after {
    content: '';
    background-size: contain;
    background: transparent none no-repeat center;
    height: 12px;
    width: 12px;
    position: absolute;
    left: 20px;
    top: 18px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input<InputProps & GroupingControlsProps>`
  left: -100%;
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:hover:not(:disabled) + label,
  &:focus + label {
    border-color: ${({ theme }) => theme.input.checkBox.defaultColor};
    box-shadow: ${({ theme }) => theme.input.hover.boxShadow};
    &:before {
      border-color: ${({ theme }) => theme.input.checkBox.defaultColor};
      box-shadow: ${({ theme }) => theme.input.hover.boxShadow};
    }
  }
  &:hover:checked:not(:disabled) + label,
  &:focus:checked + label {
    &:after {
      background-image: ${({ theme }) =>
        theme.input.checkBox.customIcon ? `url(${unbrandedTick})` : `url(${tealCheckMark})`};
    }
  }
  &:disabled + label {
    cursor: not-allowed;
    color: ${colors.grey};
    background-color: ${colors.greyLightest};
  }
  &:disabled:not(:checked) + label {
    border-color: ${colors.greyLight};
    &:before {
      border-color: ${colors.greyLight};
    }
  }
  &:checked + label {
    border-color: ${getCheckedColor};
    background-color: ${({ theme }) => theme.input.checkBox.label.backgroundColor};
    box-shadow: none;
    &:before {
      border-color: ${getCheckedColor};
      box-shadow: none;
    }
    &:after {
      background-size: contain;
      background-image: url(${getTickIcon});
      animation: ${zoomOut} 180ms ease-in-out;
    }
  }
  ${({ hideControl }) =>
    hideControl &&
    css`
      & + label {
        &:before,
        &:after {
          display: none;
        }
      }
    `}
`;

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>((props, ref) => {
  const { label, errorMessage, className, inputSize, name, hasError, isValid, hideControl, ...rest } = props;

  const theme = useThemeContext();

  return (
    <>
      <SizedContainer size={inputSize} className={className}>
        <Input
          ref={ref}
          id={`checkbox-id-${name}`}
          type="checkbox"
          hasError={hasError}
          isValid={isValid}
          name={name}
          hideControl={hideControl}
          {...rest}
          theme={theme}
        />
        <Label htmlFor={`checkbox-id-${name}`} hasError={hasError} isValid={isValid} theme={theme}>
          {label}
        </Label>
      </SizedContainer>
      {errorMessage && <ErrorMessage className="mt-1">{errorMessage}</ErrorMessage>}
    </>
  );
});

export default CheckboxField;
