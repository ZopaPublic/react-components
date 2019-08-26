import React, { FC } from 'react';
import DropdownField, { IDropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';

import { useFieldContext } from '../context';

interface IFormDropdownFieldProps extends IDropdownFieldProps {
  name: string;
}

const FormDropdownField: FC<IFormDropdownFieldProps> = ({ name, ...rest }) => {
  const { error, touched, value, onChange, onBlur } = useFieldContext(name);
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <DropdownField
      name={name}
      hasError={touched && !!error}
      errorMessage={touched && error ? error : ''}
      onChange={handleChange}
      onBlur={onBlur}
      value={value}
      {...rest}
    />
  );
};

export default FormDropdownField;
