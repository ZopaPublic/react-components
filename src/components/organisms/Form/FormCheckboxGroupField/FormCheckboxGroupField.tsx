import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import CheckboxGroupField, { ICheckboxGroupFieldProps } from '../../../molecules/CheckboxGroupField/CheckboxGroupField';

export type FormCheckboxGroupFieldProps<Val extends Record<string, boolean>> = Pick<
  FieldHookConfig<Val>,
  'validate' | 'name'
> &
  ICheckboxGroupFieldProps<Val>;

const FormCheckboxGroupField = <Val extends Record<string, boolean>>({
  name,
  validate,
  ...rest
}: FormCheckboxGroupFieldProps<Val>) => {
  const [{ value }, , { setValue }] = useField<Val>({ name, validate });
  return <CheckboxGroupField<Val> onChange={setValue} value={value} {...rest} />;
};

export default FormCheckboxGroupField;
