import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import DropdownFiltered, { IDropdownFilteredProps } from '../../../molecules/DropdownFiltered/DropdownFiltered';

export type TFormDropdownFilteredFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> &
  IDropdownFilteredProps;

const FormDropdownFilteredField = ({ name, validate, items, ...rest }: TFormDropdownFilteredFieldProps) => {
  const [{ onBlur }, { error, touched }, helpers] = useField({ name, validate });

  return (
    <DropdownFiltered
      name={name}
      onBlur={onBlur}
      items={items}
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={item => helpers.setValue(item)}
      {...rest}
    />
  );
};

export default FormDropdownFilteredField;
