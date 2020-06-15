import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import CheckboxField, { CheckboxFieldProps } from '../../../molecules/CheckboxField/CheckboxField';

export type FormCheckboxFieldProps = Pick<FieldHookConfig<boolean>, 'validate' | 'name'> & CheckboxFieldProps;

const FormCheckboxField = ({ name, validate, ...rest }: FormCheckboxFieldProps) => {
  const [{ value, onChange, onBlur }, { error, touched }] = useField<boolean>({ name, validate });

  return (
    <CheckboxField
      isValid={touched && !error}
      errorMessage={touched && error ? error : ''}
      hasError={touched && !!error}
      onChange={onChange}
      onBlur={onBlur}
      value={value.toString()}
      name={name}
      {...rest}
    />
  );
};

export default FormCheckboxField;
