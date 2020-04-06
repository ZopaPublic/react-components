import React, { forwardRef } from 'react';
import { useField } from 'formik';
import TextField, { ITextFieldProps } from '../../../molecules/TextField/TextField';

interface IFormTextFieldProps extends ITextFieldProps {
  name: string;
}

const FormTextField = forwardRef<HTMLInputElement, IFormTextFieldProps>(({ name, ...rest }, ref) => {
  const [{ value, onChange, onBlur }, { error, touched }] = useField(name);

  return (
    <TextField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      ref={ref}
      {...rest}
    />
  );
});

export default FormTextField;
