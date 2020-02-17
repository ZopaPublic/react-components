import React, { ChangeEvent, forwardRef } from 'react';
import TextField from '../../../molecules/TextField/TextField';
import { useFieldContext } from '../hooks';
import { IFormInputField } from '../types';

const FormTextField = forwardRef<HTMLInputElement, IFormInputField>(({ name, inputProps, ...rest }, ref) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      inputProps={{ onChange: handleChange, onBlur, value, name, ...inputProps }}
      ref={ref}
      {...rest}
    />
  );
});

export default FormTextField;
