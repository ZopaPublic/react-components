import React, { FC } from 'react';
import CheckboxField from '../../../molecules/CheckboxField/CheckboxField';
import { IField } from '../../../types';

import { useFieldContext } from '../context';

interface IFormCheckboxFieldProps extends Partial<IField> {
  name: string;
}

const FormCheckboxField: FC<IFormCheckboxFieldProps> = ({ name, inputProps, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);
  const handleChange = e => {
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
