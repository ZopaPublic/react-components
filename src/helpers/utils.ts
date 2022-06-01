import { InputProps } from '../components/types';
import { AppThemeProps } from '../components/styles/Theme';

export const mod = (x: number, n: number) => ((x % n) + n) % n;

export const getBorderColorByStatus = ({
  hasError,
  isValid,
  disabled,
  theme,
}: Pick<InputProps, 'hasError' | 'isValid' | 'disabled'> & AppThemeProps) => {
  if (hasError) {
    return theme.input.borderColorByStatus.error;
  }
  if (isValid) {
    return theme.input.borderColorByStatus.valid;
  }
  if (disabled) {
    return theme.input.borderColorByStatus.disabled;
  }
  return theme.input.borderColorByStatus.default;
};

export const getInputTextColor = ({ disabled, theme }: Pick<InputProps, 'disabled'> & AppThemeProps) => {
  return disabled ? theme.input.disabled.color : theme.input.color;
};
