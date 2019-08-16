import React, { FC, HTMLAttributes } from 'react';

import useFormContext from './useFormContext';

const Form: FC<HTMLAttributes<HTMLFormElement>> = props => {
  const { handleSubmit } = useFormContext();
  return <form onSubmit={handleSubmit} {...props} />;
};

export default Form;
