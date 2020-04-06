import React, { forwardRef } from 'react';
import { useField, FieldHookConfig } from 'formik';
import DropdownField, { IDropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';

export type TFormDropdownFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> & IDropdownFieldProps;

const FormDropdownField = forwardRef<HTMLSelectElement, TFormDropdownFieldProps>(({ name, validate, ...rest }, ref) => {
  const [{ onBlur, onChange }, { error, touched }] = useField<string>({ name, validate });
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
