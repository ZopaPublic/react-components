import React, { FC, ChangeEvent } from 'react';
import CheckboxField, { ICheckboxFieldProps } from '../../../molecules/CheckboxField/CheckboxField';
import { useFieldContext } from '../hooks';

interface IFormCheckboxFieldProps extends ICheckboxFieldProps {
  name: string;
}

const FormCheckboxField: FC<IFormCheckboxFieldProps> = ({ name, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckboxField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={handleChange}
      onBlur={onBlur}
      value={value}
      name={name}
      {...rest}
    />
  );
};

export default FormCheckboxField;
