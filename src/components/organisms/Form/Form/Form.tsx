import React, { FC, HTMLAttributes } from 'react';
import { useForm, IUseFormProps, FormContext } from '../hooks';

const Form: FC<Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> & IUseFormProps> = ({
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
