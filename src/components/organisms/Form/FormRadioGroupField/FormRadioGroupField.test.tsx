import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { act, fireEvent, render } from '@testing-library/react';
import { FormRadioGroupField } from '..';

const onSubmit = jest.fn();
const testId = 'radio-group-field-form';

const renderComponent = () =>
  render(
    <Formik validateOnMount initialValues={{ employment: '' }} onSubmit={onSubmit}>
      <FormikForm data-automation={testId}>
        <FormRadioGroupField
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
      </FormikForm>
    </Formik>,
  );

describe('<FormRadioField />', () => {
  it('handles value change', async () => {
    const { getByTestId, getByLabelText } = renderComponent();
    await act(async () => {
      await fireEvent.click(getByLabelText('Employed'));
    });
    await act(async () => {
      await fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({ employment: 'employed' });
  });
});
