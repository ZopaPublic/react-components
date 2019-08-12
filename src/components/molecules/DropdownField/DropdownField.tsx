import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Text from '../../atoms/Text/Text';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField } from '../../types';

interface IDropdownFieldProps
  extends Omit<IField, 'isValid' | 'inputProps'>,
    Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Size attribute for the rendered HTML `<select>` element
   */
  htmlSelectSize?: InputHTMLAttributes<HTMLSelectElement>['size'];
}

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const Label = styled(InputLabel)`
  margin-bottom: 5px;
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
      {label && <Label htmlFor={`text-id-${name}`}>{label}</Label>}
      {helpText && <Text>{helpText}</Text>}
      <SizedContainer size={size}>{input}</SizedContainer>
      {errorMessage && <FieldError data-automation={`ZA.error-${name}`}>{errorMessage}</FieldError>}
    </>
  );
}

export default DropdownField;
