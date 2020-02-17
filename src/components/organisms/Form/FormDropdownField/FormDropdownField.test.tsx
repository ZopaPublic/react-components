import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Form } from '..';

interface IForm {
  referral: string;
}

const onSubmit = jest.fn();

const dropdownLabel = 'How did you hear about us?';
const buttonLabel = 'Continue';
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
    <Form initialValues={{ referral: '' }} validate={validate} onSubmit={onSubmit}>
      <Form.Form>
        <Form.DropdownField label={dropdownLabel} name="referral">
          <option disabled value="">
            select an option
          </option>
          <option value="newspaper">Newspaper</option>
          <option value="socialMedia">Social media</option>
        </Form.DropdownField>
        <Form.Button>{buttonLabel}</Form.Button>
      </Form.Form>
    </Form>,
  );

describe('<Form.DropdownField />', () => {
  it('handles value change', () => {
    const { getByText, getByLabelText } = renderComponent();
    const dropdown = getByLabelText(dropdownLabel);
    act(() => {
      fireEvent.click(dropdown);
    });
    act(() => {
      fireEvent.change(dropdown, { target: { value: 'newspaper' } });
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ referral: 'newspaper' });
  });

  it('renders error message', () => {
    const { queryByText, getByLabelText } = renderComponent();
    const dropdown = getByLabelText(dropdownLabel);
    act(() => {
      fireEvent.click(dropdown);
    });
    act(() => {
      fireEvent.blur(dropdown);
    });
    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
