import React, { FC } from 'react';
import DropdownFiltered, { IDropdownFilteredProps } from '../../../molecules/DropdownFiltered/DropdownFiltered';
import { useFieldContext } from '../hooks';

interface IFormDropdownFilteredFieldProps extends IDropdownFilteredProps {
  name: string;
}

const FormDropdownFilteredField: FC<IFormDropdownFilteredFieldProps> = ({ name, items, inputProps, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);

  return (
    <DropdownFiltered
      inputProps={{
        name,
        onBlur,
        ...inputProps,
      }}
      items={items}
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={item => onChange(item)}
      {...rest}
    />
  );
};

export default FormDropdownFilteredField;
