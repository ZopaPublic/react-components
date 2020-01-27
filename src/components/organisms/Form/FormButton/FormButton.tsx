import React, { FC } from 'react';
import Button, { IButtonProps } from '../../../atoms/Button/Button';
import { useFormContext } from '../useForm';

export interface IFromButtonProps extends IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const FormButton: FC<IFromButtonProps> = props => {
  const { invalid, handleSubmit } = useFormContext();
  return <Button type="submit" disabled={invalid} onClick={handleSubmit} {...props} />;
};

export default FormButton;
