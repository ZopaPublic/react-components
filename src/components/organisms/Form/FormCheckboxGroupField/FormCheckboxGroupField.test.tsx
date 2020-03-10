import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { Form } from '..';

const onSubmit = jest.fn();
const buttonLabel = 'Continue';

const renderComponent = () =>
  render(
    <Form initialValues={{ music: { jazz: false, rock: false } }} onSubmit={onSubmit}>
      <Form.Form>
        <Form.CheckboxGroupField
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
        <Form.Button disabled={false}>{buttonLabel}</Form.Button>
      </Form.Form>
    </Form>,
  );

describe('<Form.CheckboxGroupField />', () => {
  it('handles value change', async () => {
    const { getByText, getByLabelText } = renderComponent();
    await act(async () => {
      await fireEvent.click(getByLabelText('Jazz'));
    });
    act(() => {
      fireEvent.click(getByText(buttonLabel));
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ music: { jazz: true, rock: false } });
  });
});
