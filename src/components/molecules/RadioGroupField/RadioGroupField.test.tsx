import React, { useState } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import axe from '../../../../axe-helper';
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
    const labelOne = getByLabelText('label one');
    const labelTwo: any = getByLabelText('label two');

    if (labelOne instanceof HTMLInputElement && labelTwo instanceof HTMLInputElement) {
      expect(labelOne.checked).toEqual(false);
      expect(labelTwo.checked).toEqual(false);
      fireEvent.click(labelOne);
      expect(onChange).not.toHaveBeenCalledWith('one');
      expect(labelOne.checked).toEqual(false);
      expect(labelOne.checked).toEqual(false);

      fireEvent.click(labelTwo);
      expect(onChange).not.toHaveBeenCalledWith('two');
      expect(labelOne.checked).toEqual(false);
      expect(labelTwo.checked).toEqual(false);
    } else {
      throw new Error('expected labelOne and labelTwo to be html input elements');
    }
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
    const { container } = render(
      <RadioGroupField
        label="label"
        onChange={jest.fn()}
        items={[
          { value: 'one', label: 'label one' },
          { value: 'two', label: 'label two' },
        ]}
        data-automation="ZA.test"
      />,
    );
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('renders the component with no control icon and no a11y violations', async () => {
    const { container } = render(
      <RadioGroupField
        label="label"
        onChange={jest.fn()}
        items={[
          { value: 'one', label: 'label one' },
          { value: 'two', label: 'label two' },
        ]}
        hideControl
      />,
    );
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('should have change of one group when multiple groups with same values', () => {
    const ControlledRadioGroupField = () => {
      const [value1, setValue1] = useState('one');
      const [value2, setValue2] = useState('one');

      return (
        <>
          <RadioGroupField
            label="Group 1"
            value={value1}
            onChange={setValue1}
            items={[
              { value: 'one', label: 'label one' },
              { value: 'two', label: 'label two' },
            ]}
            hideControl
          />
          <RadioGroupField
            label="Group 2"
            value={value2}
            onChange={setValue2}
            items={[
              { value: 'one', label: 'label one' },
              { value: 'two', label: 'label two' },
            ]}
            hideControl
          />
        </>
      );
    };
    const { container } = render(<ControlledRadioGroupField />);
    const inputOne: any = container.querySelector('#radio-id-Group-2-one');
    const inputTwo: any = container.querySelector('#radio-id-Group-2-two');

    const inputThree: any = container.querySelector('#radio-id-Group-1-one');
    const inputFour: any = container.querySelector('#radio-id-Group-1-two');

    expect(inputOne.checked).toEqual(true);
    expect(inputTwo.checked).toEqual(false);
    expect(inputThree.checked).toEqual(true);
    expect(inputFour.checked).toEqual(false);
    act(() => {
      fireEvent.click(inputTwo);
    });
    expect(inputOne.checked).toEqual(false);
    expect(inputTwo.checked).toEqual(true);
    expect(inputThree.checked).toEqual(true);
    expect(inputFour.checked).toEqual(false);

    act(() => {
      fireEvent.click(inputFour);
    });

    expect(inputOne.checked).toEqual(false);
    expect(inputTwo.checked).toEqual(true);
    expect(inputThree.checked).toEqual(false);
    expect(inputFour.checked).toEqual(true);
  });
});
