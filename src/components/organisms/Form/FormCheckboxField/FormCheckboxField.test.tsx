import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Form from '..';

interface TForm {
  policy: boolean;
}

interface TFormErrors {
  policy: string;
}

const onSubmit = jest.fn();

const checkboxLabel = 'I accept the policy';
const buttonLabel = 'Continue';
const errorMessage = 'You need to accept the policy';

const validate = (values: TForm) => {
  const errors: Partial<TFormErrors> = {};
<<<<<<< HEAD
=======

>>>>>>> refactor(form): fix linting
  if (!values.policy) {
    errors.policy = errorMessage;
  }

  return errors;
};

const renderComponent = () =>
  render(
    <Form initialValues={{ policy: false }} validate={validate} onSubmit={onSubmit}>
      <Form.CheckboxField label={checkboxLabel} name="policy" />
      <Form.Button>{buttonLabel}</Form.Button>
    </Form>,
  );

describe('<Form.CheckboxField />', () => {
  it('handles value change', () => {
    const { getByText, getByLabelText } = renderComponent();
    act(() => {
      fireEvent.click(getByLabelText(checkboxLabel));
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ policy: true });
  });

  it('renders error message', () => {
    const { queryByText, getByLabelText } = renderComponent();
    const checkbox = getByLabelText(checkboxLabel);
    act(() => {
      fireEvent.click(checkbox);
    });
    act(() => {
      fireEvent.blur(checkbox);
    });
    act(() => {
      fireEvent.click(checkbox);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
