import React, { FC, ChangeEvent } from 'react';
import DropdownField, { IDropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';
import { useFieldContext } from '../../../hooks/useForm';

interface IFormDropdownFieldProps extends IDropdownFieldProps {
  name: string;
}

const FormDropdownField: FC<IFormDropdownFieldProps> = ({ name, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <DropdownField
      name={name}
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={handleChange}
      onBlur={onBlur}
      {...rest}
    />
  );
};

export default FormDropdownField;
