import React from 'react';
import { useField } from 'formik';
import RadioGroupField, { IRadioGroupFieldProps } from '../../../molecules/RadioGroupField/RadioGroupField';

interface IFormRadioGroupFieldProps extends Omit<IRadioGroupFieldProps, 'onChange' | 'value'> {
  name: string;
}

const FormRadioGroupField = ({ name, ...rest }: IFormRadioGroupFieldProps) => {
  const [{ value }, , { setValue }] = useField(name);
  return <RadioGroupField onChange={setValue} value={value} {...rest} />;
};

export default FormRadioGroupField;
