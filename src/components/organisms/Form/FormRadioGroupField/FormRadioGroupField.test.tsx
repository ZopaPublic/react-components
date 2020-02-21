import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { Form } from '..';

const onSubmit = jest.fn();
const buttonLabel = 'Continue';

const renderComponent = () =>
  render(
    <Form initialValues={{ employment: '' }} onSubmit={onSubmit}>
      <Form.Form>
        <Form.RadioGroupField
          label="Employment"
          name="employment"
          items={[
            {
              value: 'employed',
              label: 'Employed',
            },
            {
              value: 'unemployed',
              label: 'Unemployed',
            },
          ]}
        />
        <Form.Button disabled={false}>{buttonLabel}</Form.Button>
      </Form.Form>
    </Form>,
  );

describe('<Form.RadioField />', () => {
  it('handles value change', async () => {
    const { getByText, getByLabelText } = renderComponent();
    await act(async () => {
      await fireEvent.click(getByLabelText('Employed'));
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ employment: 'employed' });
  });
});
