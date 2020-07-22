import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import RadioGroupField, { RadioGroupFieldProps } from '../../../molecules/RadioGroupField/RadioGroupField';

export type FormRadioGroupFieldProps = Pick<FieldHookConfig<string>, 'validate' | 'name'> &
  Omit<RadioGroupFieldProps, 'onChange' | 'value'>;

const FormRadioGroupField = ({ name, validate, ...rest }: FormRadioGroupFieldProps) => {
  const [{ value }, { error, touched }, { setValue, setTouched }] = useField<string>({ name, validate });
  return (
    <RadioGroupField
      onChange={setValue}
      onBlur={() => setTouched(true)}
      isValid={!error && touched}
      value={value}
      errorMessage={touched && error ? error : ''}
      {...rest}
    />
  );
};

export default FormRadioGroupField;
