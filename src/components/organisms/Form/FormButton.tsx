import React, { FC } from 'react';
import Button, { IButtonProps } from '../../atoms/Button/Button';

import useFormContext from './useFormContext';

const FormButton: FC<IButtonProps> = props => {
  const { invalid, handleSubmit } = useFormContext();
  return <Button type="submit" disabled={invalid} onClick={handleSubmit} {...props} />;
};

export default FormButton;
