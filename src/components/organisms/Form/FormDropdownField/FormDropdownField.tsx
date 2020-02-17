import React, { forwardRef, ChangeEvent } from 'react';
import DropdownField, { IDropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';
import { ISelect } from '../../../types';
import { useFieldContext } from '../hooks';

export interface IFormDropdownFieldProps extends Omit<IDropdownFieldProps, 'inputProps'> {
  inputProps?: ISelect;
  name: string;
}

const FormDropdownField = forwardRef<HTMLSelectElement, IFormDropdownFieldProps>(
  ({ name, inputProps, ...rest }, ref) => {
    const { error, touched, onChange, onBlur } = useFieldContext(name);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    };

    return (
      <DropdownField
        name={name}
        isValid={touched && !error}
        errorMessage={touched && error ? error : ''}
        inputProps={{
          onChange: handleChange,
          onBlur: onBlur,
          ...inputProps,
        }}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default FormDropdownField;
