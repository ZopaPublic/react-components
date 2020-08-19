import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { act, fireEvent, render } from '@testing-library/react';
import { FormCheckboxField } from '..';

interface Form {
  policy: boolean;
}

interface FormErrors {
  policy: string;
}

const onSubmit = jest.fn();
const testId = 'checkbox-field-form';
const checkboxLabel = 'I accept the policy';
const errorMessage = 'You need to accept the policy';

const validate = (values: Form) => {
  const errors: Partial<FormErrors> = {};

  if (!values.policy) {
    errors.policy = errorMessage;
  }

  return errors;
};

const renderComponent = () =>
  render(
    <Formik validateOnMount initialValues={{ policy: false }} validate={validate} onSubmit={onSubmit}>
      <FormikForm data-automation={testId}>
        <FormCheckboxField label={checkboxLabel} name="policy" />
      </FormikForm>
    </Formik>,
  );

describe('<FormCheckboxField />', () => {
  it('handles value change', async () => {
    const { getByTestId, getByLabelText } = renderComponent();
    await act(async () => {
      await fireEvent.click(getByLabelText(checkboxLabel));
    });
    await act(async () => {
      await fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({ policy: true });
  });

  it('renders error message', async () => {
    const { queryByText, getByLabelText } = renderComponent();
    const checkbox = getByLabelText(checkboxLabel);
    await act(async () => {
      await fireEvent.click(checkbox);
    });
    await act(async () => {
      await fireEvent.blur(checkbox);
    });
    await act(async () => {
      await fireEvent.click(checkbox);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
