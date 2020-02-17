import React, { FC, ChangeEvent } from 'react';
import RadioField from '../../../molecules/RadioField/RadioField';
import { useFieldContext } from '../hooks';
import { IFormInputField } from '../types';

const FormRadioField: FC<IFormInputField> = ({ name, inputProps, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <RadioField
      hasError={touched && !!error}
      inputProps={{
        onChange: handleChange,
        onBlur,
        value: inputProps ? inputProps.value : undefined,
        name,
        ...inputProps,
      }}
      {...rest}
    />
  );
};

export default FormRadioField;
