import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import Form from '..';
import { act } from 'react-dom/test-utils';

const onSubmit = jest.fn();
const fieldLabel = 'First name';
const testId = 'test-form';

interface IForm {
  firstName: string;
}

const validate = (values: IForm) => {
  const errors: Partial<IForm> = {};

  if (!values.firstName) {
    errors.firstName = 'This field is required';
  }

  return errors;
};

const renderComponent = () =>
  render(
    <Form data-testid={testId} validate={validate} initialValues={{ firstName: '' }} onSubmit={onSubmit}>
      <Form.TextField label={fieldLabel} name="firstName" />
    </Form>,
  );

describe('<Form />', () => {
  beforeEach(() => {
    onSubmit.mockReset();
  });

  it('calls onSubmit callback', async () => {
    const { getByTestId, getByLabelText } = renderComponent();
    await wait();
    const value = 'name';
    act(() => {
      fireEvent.change(getByLabelText(fieldLabel), { target: { value } });
    });
    await wait();
    act(() => {
      fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ firstName: value });
  });

  it('does not call onSubmit if the form is invalid', async () => {
    const { getByTestId } = renderComponent();
    await wait();
    act(() => {
      fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
