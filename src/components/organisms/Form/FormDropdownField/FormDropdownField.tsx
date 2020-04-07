import React, { forwardRef } from 'react';
import { useField, FieldHookConfig } from 'formik';
import DropdownField, { IDropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';

type TFormDropdownOption = {
  label: string;
  value: string;
};

export type TFormDropdownFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> &
  IDropdownFieldProps & {
    options: TFormDropdownOption[];
  };

const FormDropdownField = forwardRef<HTMLSelectElement, TFormDropdownFieldProps>(
  ({ name, validate, options, ...rest }, ref) => {
    const [{ onBlur, onChange, value }, { error, touched }] = useField<string>({ name, validate });
    return (
      <DropdownField
        name={name}
        isValid={touched && !error}
        errorMessage={touched && error ? error : ''}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        value={value}
        {...rest}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </DropdownField>
    );
  },
);

export default FormDropdownField;
