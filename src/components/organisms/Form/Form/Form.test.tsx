import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Form } from '..';

const onSubmit = jest.fn();
const onChange = jest.fn();
const fieldLabel = 'First name';
const fieldName = 'firstName';
const testId = 'test-form';

interface IForm {
  firstName: string;
}

const validate = (values: IForm) => {
  const errors: Partial<IForm> = {};

  if (!values.firstName) {
    errors.firstName = 'This field is required';
  }

  return errors;
};

const renderComponent = () =>
  render(
    <Form validate={validate} initialValues={{ firstName: '' }} onSubmit={onSubmit} onChange={onChange}>
      <Form.Form data-testid={testId}>
        <Form.TextField label={fieldLabel} name={fieldName} />
      </Form.Form>
    </Form>,
  );

describe('<Form />', () => {
  beforeEach(() => {
    onSubmit.mockReset();
  });

  it('calls onChange and onSubmit callback', () => {
    const { getByTestId, getByLabelText } = renderComponent();
    const value = 'name';
    act(() => {
      fireEvent.change(getByLabelText(fieldLabel), { target: { value } });
    });
    expect(onChange).toHaveBeenCalledWith({ [fieldName]: value });
    act(() => {
      fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ [fieldName]: value });
  });

  it('does not call onSubmit if the form is invalid', () => {
    const { getByTestId } = renderComponent();
    act(() => {
      fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
