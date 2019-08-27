import { IInputStatus } from '../components/types';
import { colors } from '../constants/colors';

export const mod = (x: number, n: number) => ((x % n) + n) % n;

export const getBorderColorByStatus = ({ hasError, isValid }: IInputStatus) =>
  hasError ? colors.semantic.error : isValid ? colors.semantic.success : colors.neutral.medium;
