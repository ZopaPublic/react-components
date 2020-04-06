import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { fireEvent, render, act } from '@testing-library/react';
import { Form } from '..';

interface IForm {
  referral: string;
}

const onSubmit = jest.fn();
const testId = 'dropdown-field-form';
const dropdownLabel = 'How did you hear about us?';
const errorMessage = 'Please pick one';

const validate = (values: IForm) => {
  const errors: Partial<IForm> = {};

  if (!values.referral) {
    errors.referral = errorMessage;
  }

  return errors;
};

const renderComponent = () =>
  render(
    <Formik validateOnMount initialValues={{ referral: '' }} validate={validate} onSubmit={onSubmit}>
      <FormikForm data-testid={testId}>
        <Form.DropdownField label={dropdownLabel} name="referral">
          <option disabled value="">
            select an option
          </option>
          <option value="newspaper">Newspaper</option>
          <option value="socialMedia">Social media</option>
        </Form.DropdownField>
      </FormikForm>
    </Formik>,
  );

describe('<Form.DropdownField />', () => {
  it('handles value change', async () => {
    const { getByLabelText, getByTestId } = renderComponent();
    const dropdown = getByLabelText(dropdownLabel);
    await act(async () => {
      await fireEvent.click(dropdown);
    });
    await act(async () => {
      await fireEvent.change(dropdown, { target: { value: 'newspaper' } });
    });
    await act(async () => {
      await fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({ referral: 'newspaper' });
  });

  it('renders error message', async () => {
    const { queryByText, getByLabelText } = renderComponent();
    const dropdown = getByLabelText(dropdownLabel);
    await act(async () => {
      await fireEvent.click(dropdown);
    });
    await act(async () => {
      await fireEvent.blur(dropdown);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
