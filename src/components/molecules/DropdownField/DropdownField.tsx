import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Text from '../../atoms/Text/Text';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField } from '../../types';

export interface IDropdownFieldProps extends IField<HTMLSelectElement> {
  /**
   * Size attribute for the rendered HTML `<select>` element
   */
  htmlSelectSize?: InputHTMLAttributes<HTMLSelectElement>['size'];
  name: string;
}

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const Label = styled(InputLabel)`
  margin-bottom: 5px;
`;

const Help = styled(Text)`
  margin-bottom: 10px;
  display: block;
`;

const DropdownField = ({
  label,
  errorMessage,
  size,
  helpText,
  htmlSelectSize,
  name,
  inputProps,
  ...rest
}: IDropdownFieldProps) => {
  if (!name) {
    throw Error("You didn't supply a name for the dropdown. Check the docs.");
  }

  return (
    <>
      {label && <Label htmlFor={`text-id-${name}`}>{label}</Label>}
      {helpText && <Help size="small">{helpText}</Help>}
      <SizedContainer size={size}>
        <Dropdown
          id={`text-id-${name}`}
          name={name}
          aria-label={label ? undefined : name}
          size={htmlSelectSize}
          {...inputProps}
          {...rest}
        />
      </SizedContainer>
      {errorMessage && <FieldError data-automation={`ZA.error-${name}`}>{errorMessage}</FieldError>}
    </>
  );
};

export default DropdownField;
