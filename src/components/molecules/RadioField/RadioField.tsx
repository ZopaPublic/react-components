import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import * as colors from '../../../constants/colors';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import { getBorderColorByStatus } from '../../atoms/InputText/InputText';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField, IInputStatus } from '../../types';

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
`;

const Label = styled(InputLabel)<IInputStatus>`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.neutral.neutral900};
  font-weight: 400;
  position: relative;
  &:before {
    content: '';
    background-color: ${colors.neutral.neutral25};
    border-radius: 50%;
    height: 24px;
    width: 24px;
    min-width: 24px;
    display: inline-block;
    vertical-align: top;
    margin-right: 8px;
    border: 2px ${getBorderColorByStatus} solid;
  }
  &:hover {
    cursor: pointer;
    &:before {
      border: 2px solid ${colors.neutral.neutral75};
    }
  }
`;

const Input = styled.input<IInputStatus>`
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  position: absolute;
  &:hover + label,
  &:focus + label {
    &:before {
      border: 2px ${colors.extended.blue200} solid;
    }
  }
  &:checked + label {
    font-weight: 600;
    &:before {
      content: '';
      background-color: ${colors.extended.blue600};
      border: 2px ${colors.extended.blue600} solid;
      border-radius: 50%;
      height: 24px;
      width: 24px;
      display: inline-block;
      vertical-align: top;
      margin-right: 8px;
    }
    &:after {
      content: '';
      background-color: ${colors.base.white};
      border-radius: 50%;
      height: 8px;
      width: 8px;
      display: inline-block;
      animation: ${zoomIn} 120ms ease-in-out;
      left: 8px;
      top: 8px;
      position: absolute;
    }
  }
  &:disabled + label {
    color: ${colors.neutral.neutral400};
    &:before {
      border-color: ${getBorderColorByStatus};
      background-color: ${colors.neutral.neutral25};
    }
    &:hover {
      cursor: not-allowed;
    }
  }
`;

export interface IRadioField extends IField, IInputStatus {}

const RadioField: FunctionComponent<IRadioField> = ({
  label,
  hasError,
  errorMessage,
  isValid,
  inputProps,
  ...rest
}) => {
  if (!inputProps.value) {
    throw Error('Value must be set in inputProps. Check the docs.');
  }
  const { value } = inputProps;
  return (
    <FieldContainer {...rest}>
      <Input id={`radio-id-${value}`} hasError={hasError} isValid={isValid} type="radio" {...inputProps} />
      <Label htmlFor={`radio-id-${value}`} hasError={hasError} isValid={isValid}>
        {label}
      </Label>
    </FieldContainer>
  );
};

export default RadioField;
