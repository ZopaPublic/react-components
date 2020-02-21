import React from 'react';
import RadioGroupField, { IRadioGroupFieldProps } from '../../../molecules/RadioGroupField/RadioGroupField';
import { useFieldContext } from '../hooks';

interface IFormRadioGroupFieldProps extends Omit<IRadioGroupFieldProps, 'onChange' | 'value'> {
  name: string;
}

const FormRadioGroupField = ({ name, ...rest }: IFormRadioGroupFieldProps) => {
  const { value, onChange } = useFieldContext(name);

  return <RadioGroupField onChange={onChange} value={value} {...rest} />;
};

export default FormRadioGroupField;
