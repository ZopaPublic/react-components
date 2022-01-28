import React, { forwardRef } from 'react';
import { useField, FieldHookConfig } from 'formik';
import DropdownField, { DropdownFieldProps } from '../../../molecules/DropdownField/DropdownField';

type FormDropdownOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type FormDropdownFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> &
  DropdownFieldProps & {
    options: FormDropdownOption[];
  };

const FormDropdownField = forwardRef<HTMLSelectElement, FormDropdownFieldProps>(
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
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </DropdownField>
    );
  },
);

export default FormDropdownField;
