import React, { forwardRef, ChangeEvent } from 'react';
import DropdownField, { IDropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';
import { useFieldContext } from '../hooks';

interface IFormDropdownFieldProps extends IDropdownFieldProps {
  name: string;
}

const FormDropdownField = forwardRef<HTMLSelectElement, IFormDropdownFieldProps>(({ name, ...rest }, ref) => {
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
      ref={ref}
      {...rest}
    />
  );
});

export default FormDropdownField;
