import { renderHook, act } from '@testing-library/react-hooks';

import { useForm, TFormValues, TFormErrors } from './useForm';

const initialValues = {
  name: 'name',
  lastName: 'lastName',
};
const errorMessage = 'required';
const onSubmit = jest.fn();
const validate = (values: TFormValues) => {
  const errors: TFormErrors = {};
  if (values.name === '') {
    errors.name = errorMessage;
  }
  if (values.lastName === '') {
    errors.lastName = errorMessage;
  }
  return errors;
};

describe('useForm', () => {
  afterEach(() => {
    onSubmit.mockClear();
  });

  it('should return the correct object', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit,
        validate,
      }),
    );

    ['getFieldProps', 'invalid', 'handleSubmit', 'touched', 'initialValues'].forEach(property => {
      expect(result.current).toHaveProperty(property);
    });
  });

  describe('invalid form flag', () => {
    it('should be false if no validate function is provided', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
        }),
      );
      expect(result.current.invalid).toEqual(false);
    });

    it('should be false if the fields are valid', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      expect(result.current.invalid).toEqual(false);
    });

    it('should be true if at least one of fields is invalid', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            ...initialValues,
            name: '',
          },
          onSubmit,
          validate,
        }),
      );
      expect(result.current.invalid).toEqual(true);
    });
  });

  describe('handleSubmit', () => {
    it('should mark all fields as touched', () => {
      const preventDefault = jest.fn();
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      expect(result.current.getFieldProps('name').touched).toEqual(false);
      expect(result.current.getFieldProps('lastName').touched).toEqual(false);
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(result.current.getFieldProps('name').touched).toEqual(true);
      expect(result.current.getFieldProps('lastName').touched).toEqual(true);
    });

    it('should fire provided onSubmit callback with form values', () => {
      const preventDefault = jest.fn();
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(preventDefault).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledWith(initialValues);
    });

    it('should not fire provided onSubmit callback if the form is invalid', () => {
      const preventDefault = jest.fn();
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            ...initialValues,
            name: '',
          },
          onSubmit,
          validate,
        }),
      );
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  describe('onChange', () => {
    it('should be called with the form values when any of them change', () => {
      const onChange = jest.fn();
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          onChange,
          validate,
        }),
      );

      const name = 'Jan';
      act(() => {
        result.current.getFieldProps('name').onChange(name);
      });

      expect(onChange).toHaveBeenCalledWith({
        ...initialValues,
        name,
      });

      const lastName = 'Dzban';
      act(() => {
        result.current.getFieldProps('lastName').onChange(lastName);
      });
      expect(onChange).toHaveBeenCalledWith({
        name,
        lastName,
      });
    });
  });

  describe('getFieldProps', () => {
    it('should return the correct object', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );

      ['error', 'touched', 'value', 'onChange', 'onBlur'].forEach(property => {
        expect(result.current.getFieldProps('name')).toHaveProperty(property);
        expect(result.current.getFieldProps('lastName')).toHaveProperty(property);
      });
    });
  });

  describe('onChange', () => {
    it('should properly handle value change', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: initialValues.name,
        error: undefined,
      });

      act(() => {
        result.current.getFieldProps('name').onChange('test');
      });
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: 'test',
        error: undefined,
      });

      act(() => {
        result.current.getFieldProps('name').onChange('');
      });
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: '',
        error: errorMessage,
      });
    });
  });

  describe('onBlur', () => {
    it('should properly handle blur', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );

      expect(result.current.getFieldProps('lastName').touched).toEqual(false);

      act(() => {
        result.current.getFieldProps('lastName').onBlur();
      });
      expect(result.current.getFieldProps('lastName').touched).toEqual(true);
    });
  });
});
