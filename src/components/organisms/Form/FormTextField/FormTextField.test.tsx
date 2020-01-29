import React from 'react';
import { fireEvent, render, wait, act } from '@testing-library/react';
import { Form } from '..';

interface IForm {
  firstName: string;
}

const onSubmit = jest.fn();
const buttonLabel = 'continue';
const fieldLabel = 'First name';
const errorMessage = 'This field is required';

const validate = (values: IForm) => {
  const errors: Partial<IForm> = {};

  if (!values.firstName) {
    errors.firstName = errorMessage;
  }

  return errors;
};

const renderComponent = () =>
  render(
    <Form initialValues={{ firstName: '' }} validate={validate} onSubmit={onSubmit}>
      <Form.TextField label={fieldLabel} name="firstName" />
      <Form.Button>{buttonLabel}</Form.Button>
    </Form>,
  );

describe('<Form.TextField />', () => {
  it('handles value change', async () => {
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

  it('renders error message', async () => {
    const { queryByText, getByLabelText } = renderComponent();
    const textField = getByLabelText(fieldLabel);
    act(() => {
      fireEvent.click(textField);
    });
    act(() => {
      fireEvent.blur(textField);
    });
    await wait();
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
