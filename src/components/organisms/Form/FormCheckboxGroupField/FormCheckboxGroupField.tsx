import React from 'react';
import { useField } from 'formik';
import CheckboxGroupField, { ICheckboxGroupFieldProps } from '../../../molecules/CheckboxGroupField/CheckboxGroupField';

interface IFormCheckboxGroupFieldProps extends Omit<ICheckboxGroupFieldProps, 'onChange' | 'value'> {
  name: string;
}

const FormCheckboxGroupField = ({ name, ...rest }: IFormCheckboxGroupFieldProps) => {
  const [{ value }, , { setValue }] = useField(name);

  return <CheckboxGroupField onChange={setValue} value={value} {...rest} />;
};

export default FormCheckboxGroupField;
