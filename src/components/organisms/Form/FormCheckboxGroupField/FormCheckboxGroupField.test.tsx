import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { act, fireEvent, render } from '@testing-library/react';
import { FormCheckboxGroupField } from '..';

const onSubmit = jest.fn();
const testId = 'checkbox-group-field-form';

const renderComponent = () =>
  render(
    <Formik validateOnMount initialValues={{ music: { jazz: false, rock: false } }} onSubmit={onSubmit}>
      <FormikForm data-automation={testId}>
        <FormCheckboxGroupField
          label="Music"
          name="music"
          items={[
            {
              name: 'jazz',
              label: 'Jazz',
            },
            {
              name: 'rock',
              label: 'Rock',
            },
          ]}
        />
      </FormikForm>
    </Formik>,
  );

describe('<FormCheckboxGroupField />', () => {
  it('handles value change', async () => {
    const { getByTestId, getByLabelText } = renderComponent();
    await act(async () => {
      await fireEvent.click(getByLabelText('Jazz'));
    });
    await act(async () => {
      await fireEvent.submit(getByTestId(testId));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({ music: { jazz: true, rock: false } });
  });
});
