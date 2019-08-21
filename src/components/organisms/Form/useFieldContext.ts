import useFormContext from './useFormContext';

const useFieldContext = (name: string) => {
  const context = useFormContext();
  if (context === undefined) {
    throw new Error('useFieldContext must be used within a FormProvider');
  }
  return context.getFieldProps(name);
};

export default useFieldContext;
