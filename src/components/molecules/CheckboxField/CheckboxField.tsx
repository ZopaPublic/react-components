import React, { forwardRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors, typography } from '../../../constants';
import tealCheckMark from '../../../content/images/teal-check-mark.svg';
import greenCheckMark from '../../../content/images/green-check-mark.svg';
import unbrandedTick from '../../../content/images/unbranded-tick.svg';
import unbrandedTickWhite from '../../../content/images/unbranded-tick-white.svg';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { FieldProps, InputProps, GroupingControlsProps } from '../../types';
import { AppTheme, AppThemeProps, useThemeContext } from '../../styles/Theme';
import HiddenText from '../../atoms/HiddenText/HiddenText';

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

const getCheckboxBorderColorByStatus = ({
  hasError,
  isValid,
  disabled,
  theme,
}: Pick<InputProps, 'disabled' | 'isValid' | 'hasError'> & AppThemeProps) => {
  if (hasError) {
    return theme.input.checkBox.borderColorByStatus.error;
  }
  if (isValid) {
    return theme.input.checkBox.borderColorByStatus.valid;
  }
  if (disabled) {
    return theme.input.checkBox.borderColorByStatus.disabled;
  }
  return theme.input.checkBox.borderColorByStatus.default;
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
    border: 1px ${getCheckboxBorderColorByStatus} solid;
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
    border-color: ${({ theme, hasError }) => (hasError ? theme.input.hover.error : theme.input.hover.border)};
    box-shadow: ${({ hasError, theme }) =>
      hasError
        ? `${theme.input.hover.boxShadow} ${theme.input.hover.error}`
        : `${theme.input.hover.boxShadow} ${theme.input.hover.border}`};
    &:before {
      border-color: ${({ theme }) => theme.input.hover.border};
      box-shadow: ${({ theme }) => `${theme.input.hover.boxShadow} ${theme.input.hover.border}`};
    }
    background-color: ${({ theme }) => theme.input.hover.backgroundColor};
  }
  &:hover:checked:not(:disabled) + label,
  &:focus:checked + label {
    &:before {
      background-color: ${({ theme }) => theme.input.checkBox.checkboxBackgroundColor.hover};
    }
    &:after {
      background-image: ${({ theme }) =>
        theme.input.checkBox.customIcon ? `url(${unbrandedTickWhite})` : `url(${tealCheckMark})`};
    }
  }
  &:disabled + label {
    cursor: not-allowed;
    color: ${({ theme }) => theme.input.disabled.color};
    background-color: ${({ theme }) => theme.input.disabled.backgroundColor};
  }
  &:disabled:not(:checked) + label {
    border-color: ${colors.greyLight};
    &:before {
      border-color: ${colors.greyLight};
    }
  }
  &:disabled {
    &:before {
      background-color: ${({ theme }) => theme.input.checkBox.checkboxBackgroundColor.disabled};
    }
  }
  &:checked + label {
    border-color: ${getCheckedColor};
    background-color: ${({ theme }) => theme.input.checkBox.label.backgroundColor};
    box-shadow: ${({ theme }) => `${theme.input.checkBox.checked.boxShadow} ${theme.input.hover.border}`};
    &:before {
      background-color: ${({ theme }) => theme.input.checkBox.checkboxBackgroundColor.checked};
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
          aria-describedby={props['aria-describedby'] ? props['aria-describedby'] : `checkbox-field-error-${name}`}
        />
        <Label htmlFor={`checkbox-id-${name}`} hasError={hasError} isValid={isValid} theme={theme}>
          {label}
        </Label>
        <HiddenText>
          {isValid ? `${label} field is valid` : hasError && !errorMessage ? `${label} field has error` : ''}
        </HiddenText>
      </SizedContainer>
      {errorMessage && (
        <ErrorMessage className="mt-1" id={`checkbox-field-error-${name}`}>
          {errorMessage}
        </ErrorMessage>
      )}
    </>
  );
});

export default CheckboxField;
