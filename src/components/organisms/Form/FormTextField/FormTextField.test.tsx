import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Form from '..';

interface TForm {
  firstName: string;
}

const onSubmit = jest.fn();
const buttonLabel = 'continue';
const fieldLabel = 'First name';
const errorMessage = 'This field is required';

const validate = (values: TForm) => {
  const errors: Partial<TForm> = {};

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
  it('handles value change', () => {
    const { getByText, getByLabelText } = renderComponent();
    const value = 'name';
    act(() => {
      fireEvent.change(getByLabelText(fieldLabel), { target: { value } });
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ firstName: value });
  });

  it('renders error message', () => {
    const { queryByText, getByLabelText } = renderComponent();
    const textField = getByLabelText(fieldLabel);
    act(() => {
      fireEvent.click(textField);
    });
    act(() => {
      fireEvent.blur(textField);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
