import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';
import checkMark from '../../../content/images/white-check-mark.svg';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { typography } from '../../../constants/typography';
import { IField, IInput } from '../../types';

export interface ICheckboxFieldProps extends IField, IInput {}

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

  &:checked + label {
    font-weight: ${typography.weights.semibold};

    &:before {
      content: '';
      background-color: ${colors.base.secondary};
    }
    &:after {
      content: '';
      background-size: contain;
      background-image: ${`url(${checkMark})`};
      animation: ${zoomOut} 180ms ease-in-out;
    }
  }
  &:focus + label {
    &:before {
      border: 2px ${colors.base.secondary} solid;
    }
  }
`;

const Label = styled(InputLabel)`
  width: auto;
  display: flex;
  font-weight: ${typography.weights.regular};
  line-height: 1.4;
  color: ${colors.neutral.dark};
  position: relative;
  user-select: none;
  margin-bottom: 0;

  &:before {
    content: '';
    background-color: ${colors.neutral.light};
    border-radius: 6px;
    height: 24px;
    width: 24px;
    flex-shrink: 0;
    margin-right: 8px;
    border: 2px ${colors.neutral.white} solid;
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
      border: 2px ${colors.neutral.medium} solid;
    }
  }
`;

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const CheckboxField = (props: ICheckboxFieldProps) => {
  const { label, errorMessage, className, inputSize, name, ...rest } = props;

  if (!name) throw Error('Name must be set. Check the docs.');

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
