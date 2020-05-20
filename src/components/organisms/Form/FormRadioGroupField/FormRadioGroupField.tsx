import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import RadioGroupField, { RadioGroupFieldProps } from '../../../molecules/RadioGroupField/RadioGroupField';

export type FormRadioGroupFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> &
  Omit<RadioGroupFieldProps, 'onChange' | 'value'>;

const FormRadioGroupField = ({ name, validate, ...rest }: FormRadioGroupFieldProps) => {
  const [{ value }, , { setValue }] = useField<string>({ name, validate });
  return <RadioGroupField onChange={setValue} value={value} {...rest} />;
};

export default FormRadioGroupField;
