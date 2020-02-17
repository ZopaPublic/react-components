import React, { FC, ChangeEvent } from 'react';
import CheckboxField from '../../../molecules/CheckboxField/CheckboxField';
import { useFieldContext } from '../hooks';
import { IFormInputField } from '../types';

const FormCheckboxField: FC<IFormInputField> = ({ name, inputProps, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckboxField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      inputProps={{ onChange: handleChange, onBlur, value, name, ...inputProps }}
      {...rest}
    />
  );
};

export default FormCheckboxField;
