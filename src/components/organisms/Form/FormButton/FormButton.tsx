import React, { FC } from 'react';
import Button, { IButtonProps } from '../../../atoms/Button/Button';
import { useFormContext } from '../hooks';

export interface IFromButtonProps extends IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const FormButton: FC<IFromButtonProps> = ({ disabled, ...rest }) => {
  const { invalid, handleSubmit } = useFormContext();
  return <Button type="submit" disabled={invalid || disabled} onClick={handleSubmit} {...rest} />;
};

export default FormButton;
