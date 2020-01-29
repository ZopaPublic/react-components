import { useFormContext } from './useFormContext';

export const useFieldContext = (name: string) => useFormContext().getFieldProps(name);
