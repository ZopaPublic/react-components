import { IInputStatus } from '../components/types';
import { statusColors } from '../constants/colors';
import * as colors from '../constants/colors';

export const mod = (x: number, n: number) => ((x % n) + n) % n;

export const getBorderColorByStatus = ({ hasError, isValid }: IInputStatus) =>
  hasError ? statusColors.error : isValid ? statusColors.valid : colors.neutral.neutral75;
