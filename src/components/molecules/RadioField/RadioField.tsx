import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, typography } from '../../../constants';
import { getBorderColorByStatus } from '../../../helpers/utils';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { FieldProps, InputStatus, InputProps } from '../../types';

const getCheckedColor = ({ disabled, isValid }: Pick<InputProps, 'disabled' | 'isValid'>) => {
  if (isValid) {
    return colors.success;
  }
  if (disabled) {
    return colors.grey;
  }
  return colors.brand;
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

const Label = styled(InputLabel)<InputStatus>`
  display: flex;
  line-height: 1.4;
  font-weight: ${typography.weights.regular};
  font-size: ${typography.sizes.text.body};
  color: ${colors.greyDarkest};
  padding: 14px 16px;
  border: 1px solid ${getBorderColorByStatus};
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  border-radius: 8px;
  font-weight: 400;
  position: relative;
  margin-bottom: 0;
  text-align: left;
  &:before {
    content: '';
    flex-shrink: 0;
    background-color: ${colors.white};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
    margin-right: 8px;
    border: 1px ${getBorderColorByStatus} solid;
    box-shadow: 0 0 4px 0 transparent;
    transition-property: border, box-shadow;
    transition: 0.2s ease-in-out;
  }
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    display: inline-block;
    left: 21px;
    top: 19px;
  }
  &:hover {
    cursor: pointer;
    &:before {
      border-color: ${colors.greyLight};
    }
  }
`;

const Input = styled.input<InputStatus>`
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  position: absolute;
  &:hover + label {
    border-color: ${colors.brand};
    &:before {
      border-color: ${colors.brand};
    }
  }
  &:focus + label {
    border-color: ${colors.brand};
    box-shadow: 0 0 4px 0 ${colors.brand};
    &:before {
      border-color: ${colors.brand};
      box-shadow: 0 0 4px 0 ${colors.brand};
    }
  }
  &:checked + label {
    border-color: ${getCheckedColor};
    &:before {
      border-color: ${getCheckedColor};
    }
    &:after {
      background-color: ${getCheckedColor};
      height: 10px;
      width: 10px;
      animation: ${zoomIn} 200ms ease-in-out;
    }
  }
  &:disabled + label {
    cursor: not-allowed;
    color: ${colors.grey};
  }
  &:disabled:not(:checked) + label {
    border-color: ${colors.greyLight};
    &:before {
      border-color: ${colors.greyLight};
    }
  }
`;

export interface RadioField extends FieldProps, InputProps {}

const RadioField = ({ label, hasError, errorMessage, isValid, value, inputSize, className, ...rest }: RadioField) => {
  if (!value) throw Error('Value must be set in inputProps. Check the docs.');

  return (
    <FieldContainer className={className} size={inputSize}>
      <Input id={`radio-id-${value}`} hasError={hasError} isValid={isValid} value={value} type="radio" {...rest} />
      <Label htmlFor={`radio-id-${value}`} hasError={hasError} isValid={isValid}>
        {label}
      </Label>
    </FieldContainer>
  );
};

export default RadioField;
