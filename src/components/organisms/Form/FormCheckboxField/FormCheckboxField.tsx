import React, { FC } from 'react';
import CheckboxField from '../../../molecules/CheckboxField/CheckboxField';
import { IField } from '../../../types';

import useFieldContext from '../useFieldContext';

interface IFormCheckboxFieldProps extends IField {
  name: string;
}

const FormCheckboxField: FC<IFormCheckboxFieldProps> = ({ name, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);
  const handleChange = e => {
    onChange(e.target.checked);
  };
  return (
    <CheckboxField
      errorMessage={touched && error ? error : ''}
      inputProps={{ onChange: handleChange, onBlur, value, name }}
      {...rest}
    />
  );
};

export default FormCheckboxField;
