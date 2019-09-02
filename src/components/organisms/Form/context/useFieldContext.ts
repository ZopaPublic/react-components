import useFormContext from './useFormContext';

const useFieldContext = (name: string) => useFormContext().getFieldProps(name);

export default useFieldContext;
