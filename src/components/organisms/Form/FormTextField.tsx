import React, { FC } from 'react';
import TextField from '../../molecules/TextField/TextField';

import useFieldContext from './useFieldContext';

interface IFormTextFieldProps {
  name: string;
}

const FormTextField: FC<IFormTextFieldProps> = ({ name }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);
  return <TextField errorMessage={touched && error ? error : ''} inputProps={{ onChange, onBlur, value }} />;
};

export default FormTextField;
