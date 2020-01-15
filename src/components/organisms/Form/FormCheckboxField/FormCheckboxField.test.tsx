import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Form from '..';

interface IForm {
  policy: boolean;
}

interface IFormErrors {
  policy: string;
}

const onSubmit = jest.fn();

const checkboxLabel = 'I accept the policy';
const buttonLabel = 'Continue';
const errorMessage = 'You need to accept the policy';

const validate = (values: IForm) => {
  const errors: Partial<IFormErrors> = {};

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
  it('handles value change', async () => {
    const { getByText, getByLabelText } = renderComponent();
    await act(async () => {
      await fireEvent.click(getByLabelText(checkboxLabel));
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ policy: true });
  });

  it('renders error message', async () => {
    const { queryByText, getByLabelText } = renderComponent();
    const checkbox = getByLabelText(checkboxLabel);
    await act(async () => {
      await fireEvent.click(checkbox);
    });
    act(() => {
      fireEvent.blur(checkbox);
    });
    await act(async () => {
      await fireEvent.click(checkbox);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
