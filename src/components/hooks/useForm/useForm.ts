import { useState, useCallback, useMemo } from 'react';

type TValue = any;

export type TValues = Record<string, TValue>;

export type TErrors = Record<string, string | undefined>;

export interface TUseFormProps {
  initialValues: TValues;
  onSubmit: (values: TValues) => void;
  validate?: (values: TValues) => TErrors;
  submitting?: boolean;
}

const useForm = ({ initialValues, validate, onSubmit, submitting = false }: TUseFormProps) => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState(validate ? validate(initialValues) : {});
  const [touched, updateTouched] = useState<Record<string, boolean>>({});

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
      disabled: submitting,
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
      if (!invalid) {
        onSubmit(values);
      }
    },
    [invalid, onSubmit, values],
  );

  return {
    getFieldProps,
    invalid,
    submitting,
    handleSubmit,
  };
};

export default useForm;
