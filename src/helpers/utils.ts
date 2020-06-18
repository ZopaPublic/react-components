import { InputProps } from '../components/types';
import { colors } from '../constants';

export const mod = (x: number, n: number) => ((x % n) + n) % n;

export const getBorderColorByStatus = ({
  hasError,
  isValid,
  disabled,
}: Pick<InputProps, 'hasError' | 'isValid' | 'disabled'>) => {
  if (hasError) {
    return colors.alert;
  }
  if (isValid) {
    return colors.success;
  }
  if (disabled) {
    return colors.greyLight;
  }
  return colors.grey;
};
