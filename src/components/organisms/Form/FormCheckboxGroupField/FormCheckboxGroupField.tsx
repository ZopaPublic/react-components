import React from 'react';
import CheckboxGroupField, { ICheckboxGroupFieldProps } from '../../../molecules/CheckboxGroupField/CheckboxGroupField';
import { useFieldContext } from '../hooks';

interface IFormCheckboxGroupFieldProps extends Omit<ICheckboxGroupFieldProps, 'onChange' | 'value'> {
  name: string;
}

const FormCheckboxGroupField = ({ name, ...rest }: IFormCheckboxGroupFieldProps) => {
  const { value, onChange } = useFieldContext(name);

  return <CheckboxGroupField onChange={onChange} value={value} {...rest} />;
};

export default FormCheckboxGroupField;
