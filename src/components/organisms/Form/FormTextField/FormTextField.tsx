import React, { forwardRef } from 'react';
import { useField, FieldHookConfig } from 'formik';
import TextField, { TextFieldProps } from '../../../molecules/TextField/TextField';

export type FormTextFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> & TextFieldProps;

const FormTextField = forwardRef<HTMLInputElement, FormTextFieldProps>(({ name, validate, ...rest }, ref) => {
  const [{ value, onChange, onBlur }, { error, touched }] = useField({ name, validate });

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
