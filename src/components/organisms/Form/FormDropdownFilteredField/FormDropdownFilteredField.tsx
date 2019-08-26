import React, { FC } from 'react';
import DropdownFiltered, { IDropdownFilteredProps } from '../../../molecules/DropdownFiltered/DropdownFiltered';

import { useFieldContext } from '../context';

interface IFormDropdownFilteredFieldProps extends IDropdownFilteredProps {
  name: string;
}

const FormDropdownFilteredField: FC<IFormDropdownFilteredFieldProps> = ({ name, items, inputProps, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);
  const handleChange = item => {
    onChange(item);
  };
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
      onChange={handleChange}
      {...rest}
    />
  );
};

export default FormDropdownFilteredField;
