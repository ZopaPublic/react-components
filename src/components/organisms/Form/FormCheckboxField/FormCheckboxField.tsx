import React, { FC, ChangeEvent } from 'react';
import CheckboxField from '../../../molecules/CheckboxField/CheckboxField';
import { IField } from '../../../types';
import { useFieldContext } from '../hooks';

interface IFormCheckboxFieldProps extends IField<HTMLInputElement> {
  name: string;
}

const FormCheckboxField: FC<IFormCheckboxFieldProps> = ({ name, inputProps, ...rest }) => {
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
