import React from 'react';
import { useField } from 'formik';
import CheckboxField, { ICheckboxFieldProps } from '../../../molecules/CheckboxField/CheckboxField';

interface IFormCheckboxFieldProps extends ICheckboxFieldProps {
  name: string;
}

const FormCheckboxField = ({ name, ...rest }: IFormCheckboxFieldProps) => {
  const [{ value, onChange, onBlur }, { error, touched }] = useField(name);

  return (
    <CheckboxField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      {...rest}
    />
  );
};

export default FormCheckboxField;
