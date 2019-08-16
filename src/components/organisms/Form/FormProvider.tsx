import React, { FC } from 'react';

import useForm, { TUseFormProps } from '../../hooks/useForm/useForm';

import FormContext from './FormContext';

const FormProvider: FC<TUseFormProps> = ({ children, initialValues, onSubmit, validate }) => {
  const context = useForm({
    initialValues,
    onSubmit,
    validate,
  });
  return <FormContext.Provider value={context}>{children}</FormContext.Provider>;
};

export default FormProvider;
