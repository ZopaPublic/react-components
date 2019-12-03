import React, { FC, ChangeEvent } from 'react';
import TextField, { ITextFieldProps } from '../../../molecules/TextField/TextField';

import { useFieldContext } from '../context';

interface IFormTextFieldProps extends Partial<ITextFieldProps> {
  name: string;
}

const FormTextField: FC<IFormTextFieldProps> = ({ name, inputProps, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      inputProps={{ onChange: handleChange, onBlur, value, name, ...inputProps }}
      {...rest}
    />
  );
};

export default FormTextField;
