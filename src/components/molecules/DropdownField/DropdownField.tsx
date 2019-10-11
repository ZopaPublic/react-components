import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Text from '../../atoms/Text/Text';
import Label from '../../atoms/Label/Label';
import Dropdown, { IDropdownProps } from '../../atoms/Dropdown/Dropdown';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField } from '../../types';

export interface IDropdownFieldProps extends Omit<IField, 'isValid' | 'inputProps'>, Omit<IDropdownProps, 'size'> {
  /**
   * Size attribute for the rendered HTML `<select>` element
   */
  htmlSelectSize?: InputHTMLAttributes<HTMLSelectElement>['size'];
  name: string;
}

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const FieldLabel = styled(Label)`
  margin-bottom: 5px;
`;

const Help = styled(Text)`
  margin-bottom: 10px;
  display: block;
`;

function DropdownField(props: IDropdownFieldProps) {
  const { label, errorMessage, size, helpText, htmlSelectSize, name, ...rest } = props;

  if (!name) {
    throw Error("You didn't supply a name for the dropdown. Check the docs.");
  }

  const input = (
    <Dropdown id={`text-id-${name}`} aria-label={label ? undefined : name} {...rest} size={htmlSelectSize} />
  );

  return (
    <>
      {label && <FieldLabel htmlFor={`text-id-${name}`}>{label}</FieldLabel>}
      {helpText && <Help size="small">{helpText}</Help>}
      <SizedContainer size={size}>{input}</SizedContainer>
      {errorMessage && <FieldError data-automation={`ZA.error-${name}`}>{errorMessage}</FieldError>}
    </>
  );
}

export default DropdownField;
