import React from 'react';
import { useFormikContext } from 'formik';
import Button, { ButtonProps } from '../../../atoms/Button/Button';

export interface FormButtonProps extends ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const FormButton = ({ disabled, ...rest }: FormButtonProps) => {
  const { isValid } = useFormikContext();
  return <Button type="submit" disabled={!isValid || disabled} {...rest} />;
};

export default FormButton;
