import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Form from '..';

interface TForm {
  employmentType: string;
}

const onSubmit = jest.fn();

const buttonLabel = 'Continue';
const errorMessage = 'You need to pick one';

const validate = (values: TForm) => {
  const errors: Partial<TForm> = {};
<<<<<<< HEAD
=======

>>>>>>> refactor(form): fix linting
  if (!values.employmentType) {
    errors.employmentType = errorMessage;
  }

  return errors;
};

const renderComponent = () =>
  render(
    <Form initialValues={{ employmentType: '' }} validate={validate} onSubmit={onSubmit}>
      <Form.RadioField label="Employed" name="employmentType" value="employed" />
      <Form.RadioField label="Unemployed" name="employmentType" value="unemployed" />
      <Form.Button disabled={false}>{buttonLabel}</Form.Button>
    </Form>,
  );

describe('<Form.RadioField />', () => {
  it('handles value change', () => {
    const { getByText, getByLabelText } = renderComponent();
    act(() => {
      fireEvent.click(getByLabelText('Employed'));
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ employmentType: 'employed' });
  });
});
