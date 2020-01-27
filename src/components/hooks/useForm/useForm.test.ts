import { renderHook, act } from '@testing-library/react-hooks';
import useForm, { TValues, TErrors } from './useForm';

const initialValues = {
  name: 'name',
  lastName: 'lastName',
};
const errorMessage = 'required';
const onSubmit = jest.fn();
const validate = (values: TValues) => {
  const errors: TErrors = {};
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

  it('should return the correct object', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit,
        validate,
      }),
    );
    await waitForNextUpdate();

    ['getFieldProps', 'invalid', 'handleSubmit'].forEach(property => {
      expect(result.current).toHaveProperty(property);
    });
  });

  describe('invalid form flag', () => {
    it('should be false if no validate function is provided', async () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
        }),
      );
      expect(result.current.invalid).toEqual(false);
    });

    it('should be false if the fields are valid', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();
      expect(result.current.invalid).toEqual(false);
    });

    it('should be true if at least one of fields is invalid', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues: {
            ...initialValues,
            name: '',
          },
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();
      expect(result.current.invalid).toEqual(true);
    });
  });

  describe('handleSubmit', () => {
    it('should mark all fields as touched', async () => {
      const preventDefault = jest.fn();
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();
      expect(result.current.getFieldProps('name').touched).toEqual(false);
      expect(result.current.getFieldProps('lastName').touched).toEqual(false);
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(result.current.getFieldProps('name').touched).toEqual(true);
      expect(result.current.getFieldProps('lastName').touched).toEqual(true);
    });

    it('should fire provided onSubmit callback with form values', async () => {
      const preventDefault = jest.fn();
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(preventDefault).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledWith(initialValues);
    });

    it('should not fire provided onSubmit callback if the form is invalid', async () => {
      const preventDefault = jest.fn();
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues: {
            ...initialValues,
            name: '',
          },
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      waitForNextUpdate();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  describe('onChange', () => {
    it('should be called with the form values when any of them change', async () => {
      const onChange = jest.fn();
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          onChange,
          validate,
        }),
      );
      await waitForNextUpdate();

      const name = 'Jan';
      act(() => {
        result.current.getFieldProps('name').onChange(name);
      });
      await waitForNextUpdate();
      expect(onChange).toHaveBeenCalledWith({
        ...initialValues,
        name,
      });

      const lastName = 'Dzban';
      act(() => {
        result.current.getFieldProps('lastName').onChange(lastName);
      });
      await waitForNextUpdate();
      expect(onChange).toHaveBeenCalledWith({
        name,
        lastName,
      });
    });
  });

  describe('getFieldProps', () => {
    it('should return the correct object', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();

      ['error', 'touched', 'value', 'onChange', 'onBlur'].forEach(property => {
        expect(result.current.getFieldProps('name')).toHaveProperty(property);
        expect(result.current.getFieldProps('lastName')).toHaveProperty(property);
      });
    });
  });

  describe('onChange', () => {
    it('should properly handle value change', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: initialValues.name,
        error: undefined,
      });

      act(() => {
        result.current.getFieldProps('name').onChange('test');
      });
      await waitForNextUpdate();
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: 'test',
        error: undefined,
      });

      act(() => {
        result.current.getFieldProps('name').onChange('');
      });
      await waitForNextUpdate();
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: '',
        error: errorMessage,
      });
    });
  });

  describe('onBlur', () => {
    it('should properly handle blur', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        }),
      );
      await waitForNextUpdate();

      expect(result.current.getFieldProps('lastName').touched).toEqual(false);

      act(() => {
        result.current.getFieldProps('lastName').onBlur();
      });
      expect(result.current.getFieldProps('lastName').touched).toEqual(true);
    });
  });
});
