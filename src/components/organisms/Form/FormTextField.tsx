import React, { FC } from 'react';
import TextField, { ITextFieldProps } from '../../molecules/TextField/TextField';

import useFieldContext from './useFieldContext';

interface IFormTextFieldProps extends ITextFieldProps {
  name: string;
}

const FormTextField: FC<IFormTextFieldProps> = ({ name, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);
  return (
    <TextField errorMessage={touched && error ? error : ''} inputProps={{ onChange, onBlur, value, name }} {...rest} />
  );
};

export default FormTextField;
