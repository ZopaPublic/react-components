import React, { FC } from 'react';
import DropdownFiltered, {
  IDropdownFilteredProps,
  IDropdownItem,
} from '../../../molecules/DropdownFiltered/DropdownFiltered';
import { useFieldContext } from '../hooks';

interface IFormDropdownFilteredFieldProps extends IDropdownFilteredProps {
  name: string;
}

const FormDropdownFilteredField: FC<IFormDropdownFilteredFieldProps> = ({ name, items, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);

  const handleChange = (item: IDropdownItem) => {
    onChange(item);
  };

  return (
    <DropdownFiltered
      name={name}
      onBlur={onBlur}
      items={items}
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default FormDropdownFilteredField;
