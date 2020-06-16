import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import CheckboxGroupField, { CheckboxGroupFieldProps } from '../../../molecules/CheckboxGroupField/CheckboxGroupField';

export type FormCheckboxGroupFieldProps<Val extends Record<string, boolean>> = Pick<
  FieldHookConfig<Val>,
  'validate' | 'name'
> &
  CheckboxGroupFieldProps<Val>;

const FormCheckboxGroupField = <Val extends Record<string, boolean>>({
  name,
  validate,
  ...rest
}: FormCheckboxGroupFieldProps<Val>) => {
  const [{ value }, { error, touched }, { setValue, setTouched }] = useField<Val>({ name, validate });
  return (
    <CheckboxGroupField<Val>
      onChange={setValue}
      onBlur={() => setTouched(true)}
      value={value}
      isValid={!error && touched}
      errorMessage={touched && error ? error : ''}
      {...rest}
    />
  );
};

export default FormCheckboxGroupField;
