import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors, typography } from '../../../constants';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { FieldProps, InputStatus, InputProps, GroupingControlsProps } from '../../types';
import deprecate from 'util-deprecate';
import { AppTheme, AppThemeProps, useThemeContext } from '../../styles/Theme';

const getCheckedColor = ({
  disabled,
  hasError,
  isValid,
  theme,
}: Pick<InputProps, 'disabled' | 'isValid' | 'hasError'> & AppThemeProps) => {
  if (isValid) {
    return theme.radio.checked.colorByStatus.valid;
  }
  if (hasError) {
    return theme.radio.checked.colorByStatus.error;
  }
  if (disabled) {
    return theme.radio.checked.colorByStatus.disabled;
  }
  return theme.radio.checked.colorByStatus.default;
};

const getColorByStatus = ({
  hasError,
  isValid,
  disabled,
  theme,
}: Pick<InputProps, 'disabled' | 'isValid' | 'hasError'> & AppThemeProps) => {
  if (hasError) {
    return theme.radio.colorByStatus.error;
  }
  if (isValid) {
    return theme.radio.colorByStatus.valid;
  }
  if (disabled) {
    return theme.radio.colorByStatus.disabled;
  }
  return theme.radio.colorByStatus.default;
};

const zoomIn = keyframes`
  from {
    transform: scale(1.9);
  }
  to {
    transform: scale(1);
  }
`;

const FieldContainer = styled(SizedContainer)`
  position: relative;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

interface LabelProps extends InputStatus {
  hideControl?: boolean;
}

const Label = styled(InputLabel)<LabelProps & { theme: AppTheme }>`
  display: flex;
  line-height: 1.4;
  font-weight: ${(props) => (props.hideControl ? typography.weights.bold : typography.weights.regular)};
  font-size: ${typography.sizes.text.body};
  color: ${colors.greyDarkest};
  padding: 14px 16px;
  border: 1px solid ${getColorByStatus};
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.radio.fieldBorderRadius};
  position: relative;
  margin-bottom: 0;
  justify-content: ${(props) => (props.hideControl ? `center` : `left`)};
  &:before {
    content: '';
    flex-shrink: 0;
    background-color: ${colors.white};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
    margin-right: 8px;
    border: 1px solid ${getColorByStatus};
    box-shadow: 0 0 4px 0 transparent;
    transition-property: border, box-shadow;
    transition: 0.2s ease-in-out;
  }
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    display: inline-block;
    transition-property: background-color;
    transition: 0.2s ease-in-out;
    left: 21px;
    top: 19px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input<InputStatus & GroupingControlsProps>`
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  position: absolute;

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
    background-color: ${({ theme }) => theme.radio.checked.bgColor};
    box-shadow: ${({ theme }) => theme.radio.checked.boxShadow};
    &:before {
      border-color: ${getCheckedColor};
      box-shadow: ${({ theme }) => theme.radio.checked.boxShadow};
    }
    &:after {
      background-color: ${getCheckedColor};
      height: 10px;
      width: 10px;
      animation: ${zoomIn} 200ms ease-in-out;
    }
  }
  &:hover:not(:disabled) + label,
  &:focus + label {
    border-color: ${({ theme }) => theme.radio.hover.borderColor};
    box-shadow: ${({ theme }) => theme.radio.hover.boxShadow};
    background-color: ${({ theme }) => theme.radio.hover.bgColor};
    &:before {
      border-color: ${({ theme }) => theme.radio.hover.borderColor};
      box-shadow: ${({ theme }) => theme.radio.hover.boxShadow};
    }
  }
  &:hover:checked:not(:disabled) + label,
  &:focus:checked + label {
    &:after {
      background-color: ${({ theme }) => theme.radio.checked.radioBgColor};
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

export interface RadioField extends FieldProps, InputProps, GroupingControlsProps {
  groupLabel?: string;
}

const RadioField = ({
  groupLabel = '',
  label,
  hasError,
  errorMessage,
  isValid,
  value,
  inputSize,
  className,
  hideControl,
  ...rest
}: RadioField) => {
  const id = `radio-id-${groupLabel.replace(/\s/g, '-')}-${value}`;

  const theme = useThemeContext();

  return (
    <FieldContainer className={className} size={inputSize}>
      <Input
        id={id}
        hasError={hasError}
        isValid={isValid}
        value={value}
        hideControl={hideControl}
        type="radio"
        theme={theme}
        {...rest}
      />
      <Label htmlFor={id} hasError={hasError} isValid={isValid} hideControl={hideControl} theme={theme}>
        {label}
      </Label>
    </FieldContainer>
  );
};

/**
 * @deprecated *RadioField* it's being deprecated and will be removed on the next release. Use *RadioGroupField* component instead.
 */
export default deprecate(
  RadioField,
  "<RadioField /> it's being deprecated and will be removed on the next release. Use <RadioGroupField /> component instead.",
);
