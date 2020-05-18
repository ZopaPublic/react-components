import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';
import tealCheckMark from '../../../content/images/teal-check-mark.svg';
import greyCheckMark from '../../../content/images/grey-check-mark.svg';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { typography } from '../../../constants/typography';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { IField, IInput } from '../../types';

export interface ICheckboxFieldProps extends IField, IInput {
  name: string;
}

const zoomOut = keyframes`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`;

const Input = styled.input<IInput>`
  left: -100%;
  opacity: 0;
  z-index: -1;
  position: absolute;
  & + label {
    &:before {
      border: 1px ${getBorderColorByStatus} solid;
    }
  }
  &:checked + label {
    &:before {
      border: 1px ${colors.brand} solid;
    }
    &:after {
      background-size: contain;
      background-image: ${`url(${tealCheckMark})`};
      animation: ${zoomOut} 180ms ease-in-out;
    }
  }
  &:focus + label {
    &:before {
      border: 1px ${colors.brand} solid;
      box-shadow: 0 0 4px 0 ${colors.brand};
    }
  }
  &:disabled + label {
    cursor: default;
    color: ${colors.grey};
    &:before {
      border: 1px ${colors.greyLight} solid;
      box-shadow: 0 0 4px 0 transparent;
    }
    &:after {
      background-size: contain;
      background-image: ${`url(${greyCheckMark})`};
      animation: ${zoomOut} 180ms ease-in-out;
    }
  }
`;

const Label = styled(InputLabel)`
  width: auto;
  display: flex;
  align-items: center;
  font-weight: ${typography.weights.regular};
  font-size: ${typography.sizes.text.body};
  line-height: 1.4;
  color: ${colors.greyDarkest};
  position: relative;
  user-select: none;
  margin-bottom: 0;

  &:before {
    content: '';
    background-color: ${colors.white};
    border-radius: 6px;
    height: 24px;
    width: 24px;
    flex-shrink: 0;
    margin-right: 8px;
    transition-property: border, box-shadow;
    transition: 0.2s ease-in-out;
    border: 1px ${colors.grey} solid;
    display: block;
  }
  &:after {
    content: '';
    background-size: contain;
    background: transparent none no-repeat center;
    height: 12px;
    width: 12px;
    position: absolute;
    left: 6px;
    top: 6px;
  }
  &:hover {
    cursor: pointer;
    &:before {
      border: 1px ${colors.brand} solid;
    }
  }
`;

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const CheckboxField = (props: ICheckboxFieldProps) => {
  const { label, errorMessage, className, inputSize, name, ...rest } = props;

  return (
    <>
      <SizedContainer size={inputSize} className={className}>
        <Input id={`checkbox-id-${name}`} type="checkbox" name={name} {...rest} />
        <Label htmlFor={`checkbox-id-${name}`}>{label}</Label>
      </SizedContainer>
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </>
  );
};

export default CheckboxField;
