import React from 'react';
import { fireEvent, render, wait, act } from '@testing-library/react';
import { Form } from '..';

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

const onSubmit = jest.fn();
const buttonLabel = 'continue';
const fieldLabel = 'First name';

const renderComponent = (props = {}) =>
  render(
    <Form initialValues={{ firstName: '' }} validate={validate} onSubmit={onSubmit}>
      <Form.TextField label={fieldLabel} name="firstName" />
      <Form.Button {...props}>{buttonLabel}</Form.Button>
    </Form>,
  );

describe('<Form.Button />', () => {
  it('renders disabled button', async () => {
    const { getByText } = renderComponent();
    await wait();
    expect(getByText(buttonLabel)).toBeDisabled();
  });

  it('renders enabled button', async () => {
    const { getByText, getByLabelText } = renderComponent();
    act(() => {
      fireEvent.change(getByLabelText(fieldLabel), { target: { value: 'name' } });
    });
    await wait();
    expect(getByText(buttonLabel)).not.toBeDisabled();
  });

  it('renders disabled button even though the form is valid', async () => {
    const { getByText, getByLabelText } = renderComponent({ disabled: true });
    act(() => {
      fireEvent.change(getByLabelText(fieldLabel), { target: { value: 'name' } });
    });
    await wait();
    expect(getByText(buttonLabel)).toBeDisabled();
  });

  it('calls onSubmit callback', async () => {
    const { getByText, getByLabelText } = renderComponent();
    const value = 'name';
    act(() => {
      fireEvent.change(getByLabelText(fieldLabel), { target: { value } });
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    await wait();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ firstName: value });
  });
});
