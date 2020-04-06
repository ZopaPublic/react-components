import React, { forwardRef } from 'react';
import { useField } from 'formik';
import DropdownField, { IDropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';

interface IFormDropdownFieldProps extends IDropdownFieldProps {
  name: string;
}

const FormDropdownField = forwardRef<HTMLSelectElement, IFormDropdownFieldProps>(({ name, ...rest }, ref) => {
  const [{ onBlur, onChange }, { error, touched }] = useField(name);
  return (
    <DropdownField
      name={name}
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
      {...rest}
    />
  );
});

export default FormDropdownField;
