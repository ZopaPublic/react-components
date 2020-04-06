import React from 'react';
import { useField } from 'formik';
import DropdownFiltered, { IDropdownFilteredProps } from '../../../molecules/DropdownFiltered/DropdownFiltered';

interface IFormDropdownFilteredFieldProps extends IDropdownFilteredProps {
  name: string;
}

const FormDropdownFilteredField = ({ name, items, ...rest }: IFormDropdownFilteredFieldProps) => {
  const [{ onBlur }, { error, touched }, helpers] = useField(name);

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
