import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import Button, { IButtonProps } from '../../../atoms/Button/Button';

export interface FromButtonProps extends IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const FormButton: FC<FromButtonProps> = ({ disabled, ...rest }) => {
  const { isValid } = useFormikContext();
  return <Button type="submit" disabled={!isValid || disabled} {...rest} />;
};

export default FormButton;
