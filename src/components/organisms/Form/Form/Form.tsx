import React, { FC, HTMLAttributes } from 'react';
import { useForm, IUseFormProps, FormContext } from '../../../hooks/useForm';

const Form: FC<Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> & IUseFormProps> = ({
  children,
  initialValues,
  onSubmit,
  onChange,
  validate,
  ...rest
}) => {
  const context = useForm({
    initialValues,
    onSubmit,
    validate,
    onChange,
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
