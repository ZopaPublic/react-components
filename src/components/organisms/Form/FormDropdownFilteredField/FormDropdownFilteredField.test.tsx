import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { fireEvent, render, act } from '@testing-library/react';
import { FormDropdownFilteredField } from '..';

interface Form {
  nationality: string;
}

const onSubmit = jest.fn();
const testId = 'dropdown-filtered-field-form';
const dropdownLabel = 'Nationality';
const fieldName = 'nationality';
const errorMessage = 'Please pick one';
const dataAutomation = 'ZA.filteredDropdown';

const validate = (values: Form) => {
  const errors: Partial<Form> = {};

  if (!values.nationality) {
    errors.nationality = errorMessage;
  }

  return errors;
};

const nationalities = [{ value: 'British' }, { value: 'Angolan' }];

const renderComponent = () =>
  render(
    <Formik validateOnMount initialValues={{ nationality: '' }} validate={validate} onSubmit={onSubmit}>
      <FormikForm data-automation={testId}>
        <FormDropdownFilteredField
          name={fieldName}
          placeholder="Select a nationality..."
          items={nationalities}
          label={dropdownLabel}
          data-automation={dataAutomation}
        />
      </FormikForm>
    </Formik>,
  );

describe('<FormDropdownFilteredField />', () => {
  it('handles value change', async () => {
    const { getByTestId, getByText } = renderComponent();
    const dropdown = getByTestId(dataAutomation);
    await act(async () => {
      await fireEvent.click(dropdown);
    });
    await act(async () => {
      await fireEvent.change(dropdown, { target: { value: 'B' } });
    });
    await act(async () => {
      await fireEvent.click(getByText('British'));
    });
    await act(async () => {
      await fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({ [fieldName]: { value: 'British' } });
  });

  it('renders error message', async () => {
    const { queryByText, getByTestId } = renderComponent();
    const dropdown = getByTestId(dataAutomation);
    await act(async () => {
      await fireEvent.click(dropdown);
    });
    await act(async () => {
      await fireEvent.blur(dropdown);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
