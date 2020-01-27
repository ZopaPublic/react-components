import React, { FC, ChangeEvent } from 'react';
import RadioField, { IRadioField } from '../../../molecules/RadioField/RadioField';
import { useFieldContext } from '../../../hooks/useForm';

interface IFormRadioFieldProps extends IRadioField {
  name: string;
  value: string;
}

const FormRadioField: FC<IFormRadioFieldProps> = ({ name, value, inputProps, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <RadioField
      hasError={touched && !!error}
      inputProps={{ onChange: handleChange, onBlur, value, name, ...inputProps }}
      {...rest}
    />
  );
};

export default FormRadioField;
