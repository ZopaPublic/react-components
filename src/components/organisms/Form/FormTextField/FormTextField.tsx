import React, { forwardRef, ChangeEvent } from 'react';
import TextField, { ITextFieldProps } from '../../../molecules/TextField/TextField';
import { useFieldContext } from '../hooks';

interface IFormTextFieldProps extends ITextFieldProps {
  name: string;
}

const FormTextField = forwardRef<HTMLInputElement, IFormTextFieldProps>(({ name, inputProps, ...rest }, ref) => {
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
