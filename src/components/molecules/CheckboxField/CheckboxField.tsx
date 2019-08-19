import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as colors from '../../../constants/colors';
import checkMark from '../../../content/images/white-check-mark.svg';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { typography } from '../../../constants/typography';
import { IField, IInput } from '../../types';

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
      background-color: ${colors.extended.blue600};
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
      border: 2px ${colors.extended.blue100} solid;
    }
  }
`;

const Label = styled(InputLabel)`
  width: auto;
  display: flex;
  font-weight: ${typography.weights.regular};
  color: ${colors.neutral.neutral900};
  position: relative;
  user-select: none;

  &:before {
    content: '';
    background-color: ${colors.neutral.neutral25};
    border-radius: 6px;
    height: 24px;
    width: 24px;
    flex-shrink: 0;
    margin-right: 8px;
    border: 2px ${colors.base.white} solid;
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
      border: 2px ${colors.extended.blue100} solid;
    }
  }
`;

const CheckboxField = (props: IField) => {
  const { label, inputProps, errorMessage, size, ...rest } = props;
  const { name } = inputProps;

  if (!name) {
    throw Error('Name must be set in inputProps. Check the docs.');
  }
  return (
    <SizedContainer size={size} {...rest}>
      <Input id={`checkbox-id-${name}`} type="checkbox" {...inputProps} />
      <Label htmlFor={`checkbox-id-${name}`}>{label}</Label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SizedContainer>
  );
};

export default CheckboxField;
