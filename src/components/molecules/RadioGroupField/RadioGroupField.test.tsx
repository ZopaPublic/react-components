import React, { useState } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import RadioGroupField from './RadioGroupField';

describe('<RadioGroupField />', () => {
  it('should handle value change if it is not controlled', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroupField
        label="label"
        onChange={onChange}
        items={[
          {
            value: 'one',
            label: 'label one',
            defaultChecked: true,
          },
          {
            value: 'two',
            label: 'label two',
          },
        ]}
      />,
    );
    const labelOne: any = getByLabelText('label one');
    const labelTwo: any = getByLabelText('label two');
    expect(labelOne.checked).toEqual(true);
    expect(labelTwo.checked).toEqual(false);

    fireEvent.click(labelTwo);
    expect(onChange).toHaveBeenCalledWith('two');
    expect(labelOne.checked).toEqual(false);
    expect(labelTwo.checked).toEqual(true);
  });

  it('should not change value if it is disabled', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroupField
        disabled
        label="label"
        onChange={onChange}
        items={[
          {
            value: 'one',
            label: 'label one',
          },
          {
            value: 'two',
            label: 'label two',
          },
        ]}
      />,
    );
    const labelOne: any = getByLabelText('label one');
    const labelTwo: any = getByLabelText('label two');
    expect(labelOne.checked).toEqual(false);
    expect(labelTwo.checked).toEqual(false);

    fireEvent.click(labelOne);
    expect(onChange).not.toHaveBeenCalledWith('two');
    expect(labelOne.checked).toEqual(false);
    expect(labelOne.checked).toEqual(false);

    fireEvent.click(labelTwo);
    expect(onChange).not.toHaveBeenCalledWith('two');
    expect(labelOne.checked).toEqual(false);
    expect(labelTwo.checked).toEqual(false);
  });

  it('should handle value change if it is controlled', () => {
    const ControlledRadioGroupField = () => {
      const [value, setValue] = useState('one');
      return (
        <RadioGroupField
          items={[
            { value: 'one', label: 'label one' },
            { value: 'two', label: 'label two' },
          ]}
          value={value}
          onChange={setValue}
          label="label"
        />
      );
    };
    const { getByLabelText } = render(<ControlledRadioGroupField />);
    const labelOne: any = getByLabelText('label one');
    const labelTwo: any = getByLabelText('label two');
    expect(labelOne.checked).toEqual(true);
    expect(labelTwo.checked).toEqual(false);
    act(() => {
      fireEvent.click(labelTwo);
    });
    expect(labelOne.checked).toEqual(false);
    expect(labelTwo.checked).toEqual(true);
  });

  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<RadioGroupField label="label" onChange={jest.fn()} items={[]} />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
