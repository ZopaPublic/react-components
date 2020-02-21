import React from 'react';
import RadioGroupField, { IRadioGroupFieldProps } from '../../../molecules/RadioGroupField/RadioGroupField';
import { useFieldContext } from '../hooks';

interface IFormRadioGroupFieldProps extends IRadioGroupFieldProps {
  name: string;
}

const FormRadioGroupField = ({ name, onChange, value, ...rest }: IFormRadioGroupFieldProps) => {
  const field = useFieldContext(name);

  return <RadioGroupField onChange={field.onChange} value={field.value} {...rest} />;
};

export default FormRadioGroupField;
