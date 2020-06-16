import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, typography } from '../../../constants';
import { getBorderColorByStatus } from '../../../helpers/utils';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { FieldProps, InputStatus, InputProps } from '../../types';

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
  align-items: center;
  line-height: 1.4;
  font-weight: ${typography.weights.regular};
  font-size: ${typography.sizes.text.body};
  color: ${colors.greyDarkest};
  font-weight: 400;
  position: relative;
  margin-bottom: 0;
  &:before {
    content: '';
    background-color: ${colors.white};
    border-radius: 50%;
    height: 24px;
    width: 24px;
    min-width: 24px;
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
    left: 6px;
    top: 0;
    bottom: 0;
    margin: auto;
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
    &:before {
      border-color: ${colors.brand};
    }
  }
  &:focus + label {
    &:before {
      border-color: ${colors.brand};
      box-shadow: 0 0 4px 0 ${colors.brand};
    }
  }
  &:checked + label {
    &:before {
      border-color: ${colors.brand};
    }
    &:after {
      background-color: ${({ disabled }) => (disabled ? colors.grey : colors.brand)};
      height: 12px;
      width: 12px;
      animation: ${zoomIn} 200ms ease-in-out;
    }
  }
  &:disabled + label {
    cursor: not-allowed;
    color: ${colors.grey};
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
