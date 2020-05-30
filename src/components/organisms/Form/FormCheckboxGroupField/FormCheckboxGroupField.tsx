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
  const [{ value }, , { setValue }] = useField<Val>({ name, validate });
  return <CheckboxGroupField<Val> onChange={setValue} value={value} {...rest} />;
};

export default FormCheckboxGroupField;
