import React, { FC, HTMLAttributes } from 'react';
import { useFormContext } from '../hooks';

const Form: FC<HTMLAttributes<HTMLFormElement>> = ({ onSubmit, children, ...rest }) => {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  );
};

export default Form;
