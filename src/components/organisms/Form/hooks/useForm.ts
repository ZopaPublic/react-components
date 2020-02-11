import { useState, useCallback, useMemo } from 'react';

type TValue = any;
export type TValues = Record<string, TValue>;
export type TErrors = Record<string, string | undefined>;
export type TTouched = Record<string, boolean>;

export interface IUseFormProps {
  initialValues: TValues;
  onSubmit: (values: TValues) => void;
  onChange?: (values: TValues) => void;
  validate?: (values: TValues) => TErrors;
}

export interface IFieldProps {
  error: string | undefined;
  touched: boolean;
  value: TValue;
  onChange: (eventData: unknown) => void;
  onBlur: (eventData: unknown) => void;
}

export interface IUseFormValues {
  getFieldProps: (name: string) => IFieldProps;
  handleSubmit: (values: TValues) => void;
  invalid: boolean;
  errors: TErrors;
  touched: TTouched;
}

export const useForm = ({ initialValues, validate, onSubmit, onChange }: IUseFormProps): IUseFormValues => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState<TErrors>(validate ? validate(initialValues) : {});
  const [touched, updateTouched] = useState<TTouched>({});

  const runValidation = async (formValues: typeof initialValues) => {
    if (validate) {
      const errors = validate(formValues);
      updateErrors(errors);
    }
  };

  const invalid = useMemo(() => !!Object.keys(errors).length, [errors]);

  const getFieldProps = useCallback(
    (name: string) => ({
      error: errors[name],
      touched: !!touched[name],
      value: values[name],
      onChange(value: unknown) {
        const newValues = { ...values, [name]: value };
        onChange && onChange(newValues);
        updateValues(newValues);
        runValidation(newValues);
      },
      onBlur() {
        updateTouched({ ...touched, [name]: true });
      },
    }),
    [errors, runValidation, touched, values],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      updateTouched(
        Object.keys(initialValues).reduce(
          (acc, key) => ({
            ...acc,
            [key]: true,
          }),
          {},
        ),
      );
      if (!invalid) {
        onSubmit(values);
      }
    },
    [invalid, onSubmit, values],
  );

  return {
    getFieldProps,
    invalid,
    handleSubmit,
    errors,
    touched,
  };
};
