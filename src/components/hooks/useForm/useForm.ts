import { useState, useCallback, useMemo } from 'react';

interface TDictionary<T> {
  [key: string]: T;
}

type TValue = any;

type TValues = TDictionary<TValue>;

type TValidate = (values: TValues) => TDictionary<string>;

type TOnSubmit = (values: TValues) => void;

interface TUseFormProps {
  initialValues: TValues;
  validate: TValidate;
  onSubmit: TOnSubmit;
  submitting: boolean;
}

const useForm = ({ initialValues, validate, onSubmit, submitting = false }: TUseFormProps) => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState(validate ? validate(initialValues) : {});
  const [touched, updateTouched] = useState<TDictionary<boolean>>({});

  const runValidation = useCallback(
    formValues => {
      if (validate) {
        updateErrors(validate(formValues));
      }
    },
    [validate],
  );

  const invalid = useMemo(() => !!Object.keys(errors).length, [errors]);

  const getFieldProps = useCallback(
    name => ({
      submitting,
      error: errors[name],
      touched: !!touched[name],
      value: values[name],
      onChange(e) {
        const newValues = { ...values, [name]: e.target.value };
        updateValues(newValues);
        runValidation(newValues);
      },
      onBlur() {
        updateTouched({ ...touched, [name]: true });
      },
    }),
    [errors, runValidation, submitting, touched, values],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!invalid && onSubmit) {
        onSubmit(values);
      }
    },
    [invalid, onSubmit, values],
  );

  const resetForm = useCallback(() => {
    updateValues(initialValues);
    updateErrors({});
    updateTouched({});
  }, [initialValues]);

  return {
    getFieldProps,
    invalid,
    submitting,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
