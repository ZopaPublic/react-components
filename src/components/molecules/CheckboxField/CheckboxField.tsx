import React, { forwardRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors, typography } from '../../../constants';
import tealCheckMark from '../../../content/images/teal-check-mark.svg';
import greenCheckMark from '../../../content/images/green-check-mark.svg';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { FieldProps, InputProps, GroupingControlsProps } from '../../types';

export interface CheckboxFieldProps
  extends FieldProps,
    GroupingControlsProps,
    Omit<InputProps, 'startIcon' | 'endIcon'> {}

const getCheckedColor = ({ disabled, isValid }: Pick<InputProps, 'disabled' | 'isValid'>) => {
  if (isValid) {
    return colors.success;
  }
  if (disabled) {
    return colors.grey;
  }
  return colors.brand;
};

const zoomOut = keyframes`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`;

const Label = styled(InputLabel)`
  width: auto;
  display: flex;
  text-align: left;
  font-weight: ${typography.weights.regular};
  font-size: ${typography.sizes.text.body};
  padding: 14px 16px;
  border: 1px solid ${getBorderColorByStatus};
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  border-radius: 8px;
  line-height: 1.4;
  color: ${colors.greyDarkest};
  position: relative;
  user-select: none;
  margin-bottom: 0;

  &:before {
    content: '';
    flex-shrink: 0;
    background-color: ${colors.white};
    border-radius: 4px;
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
    border-color: ${colors.brand};
    box-shadow: 0 0 4px 0 ${colors.brand};
    &:before {
      border-color: ${colors.brand};
      box-shadow: 0 0 4px 0 ${colors.brand};
    }
  }
  &:hover:checked:not(:disabled) + label,
  &:focus:checked + label {
    &:after {
      background-image: ${`url(${tealCheckMark})`};
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
  &:checked + label {
    border-color: ${getCheckedColor};
    background-color: ${colors.brandLight};
    box-shadow: none;
    &:before {
      border-color: ${getCheckedColor};
      box-shadow: none;
    }
    &:after {
      background-size: contain;
      background-image: url(${({ isValid }) => (isValid ? greenCheckMark : tealCheckMark)});
      animation: ${zoomOut} 180ms ease-in-out;
    }
  }
  ${({ hideIcon }) =>
    hideIcon &&
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
  const { label, errorMessage, className, inputSize, name, hasError, isValid, hideIcon, ...rest } = props;
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
          hideIcon={hideIcon}
          {...rest}
        />
        <Label htmlFor={`checkbox-id-${name}`} hasError={hasError} isValid={isValid}>
          {label}
        </Label>
      </SizedContainer>
      {errorMessage && <ErrorMessage className="mt-1">{errorMessage}</ErrorMessage>}
    </>
  );
});

export default CheckboxField;
