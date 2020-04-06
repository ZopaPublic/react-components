import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import Button, { IButtonProps } from '../../../atoms/Button/Button';

export interface IFromButtonProps extends IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const FormButton: FC<IFromButtonProps> = ({ disabled, ...rest }) => {
  const { isValid } = useFormikContext();
  return <Button type="submit" disabled={!isValid || disabled} {...rest} />;
};

export default FormButton;
