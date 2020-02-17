import React, { FC } from 'react';
import DropdownFiltered, {
  IDropdownFilteredProps,
  IDropdownItem,
} from '../../../molecules/DropdownFiltered/DropdownFiltered';
import { useFieldContext } from '../hooks';
import { IInput } from '../../../types';

interface IFormDropdownFilteredFieldProps extends Omit<IDropdownFilteredProps, 'inputProps'> {
  inputProps?: IInput;
  name: string;
}

const FormDropdownFilteredField: FC<IFormDropdownFilteredFieldProps> = ({ name, items, inputProps, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);

  const handleChange = (item: IDropdownItem) => {
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
