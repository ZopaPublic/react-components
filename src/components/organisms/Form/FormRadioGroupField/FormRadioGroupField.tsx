import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import RadioGroupField, { IRadioGroupFieldProps } from '../../../molecules/RadioGroupField/RadioGroupField';

export type TFormRadioGroupFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> &
  Omit<IRadioGroupFieldProps, 'onChange' | 'value'>;

const FormRadioGroupField = ({ name, validate, ...rest }: TFormRadioGroupFieldProps) => {
  const [{ value }, , { setValue }] = useField<string>({ name, validate });
  return <RadioGroupField onChange={setValue} value={value} {...rest} />;
};

export default FormRadioGroupField;
