import React, { FC } from 'react';
import TextField, { ITextFieldProps } from '../../../molecules/TextField/TextField';

import useFieldContext from '../useFieldContext';

interface IFormTextFieldProps extends ITextFieldProps {
  name: string;
}

const FormTextField: FC<IFormTextFieldProps> = ({ name, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <TextField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      inputProps={{ onChange: handleChange, onBlur, value, name }}
      {...rest}
    />
  );
};

export default FormTextField;
