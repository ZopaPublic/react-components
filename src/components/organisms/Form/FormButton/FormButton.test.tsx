import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Form from '../Form';

interface TForm {
  firstName: string;
}

const validate = (values: TForm) => {
  let errors: Partial<TForm> = {};
  if (!values.firstName) {
    errors.firstName = 'This field is required';
  }
  return errors;
};

const onSubmit = jest.fn();

const renderComponent = () =>
  render(
    <Form.Provider initialValues={{ firstName: '' }} validate={validate} onSubmit={onSubmit}>
      <Form.TextField label="First name" name="firstName" />
      <Form.Button>continue</Form.Button>
    </Form.Provider>,
  );

describe('<Form.Button />', () => {
  it('renders disabled button', () => {
    const { getByText } = renderComponent();
    expect(getByText('continue')).toBeDisabled();
  });

  it('renders enabled button', () => {
    const { getByText, getByLabelText } = renderComponent();
    act(() => {
      fireEvent.change(getByLabelText('First name'), { target: { value: 'name' } });
    });
    expect(getByText('continue')).not.toBeDisabled();
  });

  it('calls onSubmit callback', () => {
    const { getByText, getByLabelText } = renderComponent();
    act(() => {
      fireEvent.change(getByLabelText('First name'), { target: { value: 'name' } });
    });
    act(() => {
      fireEvent.click(getByText('continue'));
    });
    expect(onSubmit).toHaveBeenCalledWith({ firstName: 'name' });
  });
});
