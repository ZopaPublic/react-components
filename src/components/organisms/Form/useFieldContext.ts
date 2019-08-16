import useFormContext from './useFormContext';

const useField = (name: string) => {
  const context = useFormContext();
  if (context === undefined) {
    throw new Error('useField must be used within a FormProvider');
  }
  return context.getFieldProps(name);
};

export default useField;
