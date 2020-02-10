import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Form } from '..';

interface IForm {
  nationality: string;
}

const onSubmit = jest.fn();

const dropdownLabel = 'Nationality';
const fieldName = 'nationality';
const buttonLabel = 'Continue';
const errorMessage = 'Please pick one';

const validate = (values: IForm) => {
  const errors: Partial<IForm> = {};

  if (!values.nationality) {
    errors.nationality = errorMessage;
  }

  return errors;
};

const nationalities = [{ value: 'British' }, { value: 'Angolan' }];

const renderComponent = () =>
  render(
    <Form initialValues={{ nationality: '' }} validate={validate} onSubmit={onSubmit}>
      <Form.DropdownFilteredField
        name={fieldName}
        inputProps={{ placeholder: 'Select a nationality...' }}
        items={nationalities}
        label={dropdownLabel}
      />
      <Form.Button>{buttonLabel}</Form.Button>
    </Form>,
  );

describe('<Form.DropdownFilteredField />', () => {
  it('handles value change', () => {
    const { getByText, getAllByLabelText } = renderComponent();
    const dropdown = getAllByLabelText(dropdownLabel)[0];
    act(() => {
      fireEvent.click(dropdown);
    });
    act(() => {
      fireEvent.change(dropdown, { target: { value: 'B' } });
    });
    act(() => {
      fireEvent.click(getByText('British'));
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ [fieldName]: { value: 'British' } });
  });

  it('renders error message', () => {
    const { queryByText, getAllByLabelText } = renderComponent();
    const dropdown = getAllByLabelText(dropdownLabel)[0];
    act(() => {
      fireEvent.click(dropdown);
    });
    act(() => {
      fireEvent.blur(dropdown);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
