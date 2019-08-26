import React, { FC, HTMLAttributes } from 'react';

import { FormContext } from '../context';
import useForm, { IUseFormProps } from '../../../hooks/useForm/useForm';

const Form: FC<HTMLAttributes<HTMLFormElement> & IUseFormProps> = ({
  children,
  initialValues,
  onSubmit,
  validate,
  ...rest
}) => {
  const context = useForm({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <FormContext.Provider value={context}>
      <form onSubmit={context.handleSubmit} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
