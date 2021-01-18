import React, { useState } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import axe from '../../../../axe-helper';
import CheckboxGroupField from './CheckboxGroupField';

describe('<CheckboxGroupField />', () => {
  it('should handle value change if it is not controlled', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <CheckboxGroupField
        label="label"
        onChange={onChange}
        items={[
          {
            name: 'one',
            label: 'label one',
            defaultChecked: true,
          },
          {
            name: 'two',
            label: 'label two',
          },
        ]}
      />,
    );
    const labelOne = getByLabelText('label one');
    const labelTwo = getByLabelText('label two');
    if (labelOne instanceof HTMLInputElement && labelTwo instanceof HTMLInputElement) {
      expect(labelOne.checked).toEqual(true);
      expect(labelTwo.checked).toEqual(false);

      fireEvent.click(labelTwo);
      expect(onChange).toHaveBeenCalledWith({ one: true, two: true });
      expect(labelOne.checked).toEqual(true);
      expect(labelTwo.checked).toEqual(true);
    } else {
      throw new Error('expected labelOne and labelTwo to be html input elements');
    }
  });

  it('should not change value if it is disabled', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <CheckboxGroupField
        disabled
        label="label"
        onChange={onChange}
        items={[
          {
            name: 'one',
            label: 'label one',
          },
          {
            name: 'two',
            label: 'label two',
          },
        ]}
      />,
    );
    const labelOne = getByLabelText('label one');
    const labelTwo = getByLabelText('label two');

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
    const ControlledCheckboxGroupField = () => {
      const [value, setValue] = useState<Record<string, boolean>>({ one: true, two: false });
      return (
        <CheckboxGroupField
          items={[
            { name: 'one', label: 'label one' },
            { name: 'two', label: 'label two' },
          ]}
          value={value}
          onChange={setValue}
          label="label"
        />
      );
    };
    const { getByLabelText } = render(<ControlledCheckboxGroupField />);
    const labelOne = getByLabelText('label one');
    const labelTwo = getByLabelText('label two');
    if (labelOne instanceof HTMLInputElement && labelTwo instanceof HTMLInputElement) {
      expect(labelOne.checked).toEqual(true);
      expect(labelTwo.checked).toEqual(false);
      act(() => {
        fireEvent.click(labelTwo);
      });
      expect(labelOne.checked).toEqual(true);
      expect(labelTwo.checked).toEqual(true);
    } else {
      throw new Error('expected labelOne and labelTwo to be html input elements');
    }
  });

  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(
      <CheckboxGroupField
        label="label"
        onChange={jest.fn()}
        items={[{ label: 'option', name: 'option' }]}
        data-automation="ZA.test"
      />,
    );
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('renders the component with no control icon and no a11y violations', async () => {
    const { container } = render(
      <CheckboxGroupField
        label="label"
        onChange={jest.fn()}
        items={[{ label: 'option', name: 'option' }]}
        hideControl
      />,
    );
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
