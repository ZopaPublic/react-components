import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputRange from './InputRange';
import axe from '../../../../axe-helper';

describe('<InputRange />', () => {
  it('renders and updates as expected', async () => {
    const ControlledInputRange = () => {
      const [value, setValue] = useState(75);

      return <InputRange value={value} onChange={setValue} />;
    };

    render(<ControlledInputRange />);

    const input = (await screen.findByRole('slider')) as HTMLInputElement;

    expect(input.value).toEqual('75');

    fireEvent.change(input, { target: { value: '25' } });

    expect(input.value).toEqual('25');
  });

  describe('With Controls', () => {
    it('renders disabled decrement button when value is same as min', () => {
      const ControlledInputRangeWithControls = () => {
        const [value, setValue] = useState(0);

        return <InputRange aria-label="slider" controls min={0} value={value} onChange={setValue} />;
      };

      render(<ControlledInputRangeWithControls />);

      const decrementButton = screen.getByTitle('decrement');
      const inputRange = screen.getByTitle('range') as HTMLInputElement;

      expect(decrementButton).toHaveAttribute('disabled');
      expect(inputRange.value).toBe('0');
    });

    it('disables the decrement button when value reaches min', () => {
      const ControlledInputRangeWithControls = () => {
        const [value, setValue] = useState(1);

        return <InputRange aria-label="slider" controls min={0} value={value} onChange={setValue} />;
      };

      render(<ControlledInputRangeWithControls />);

      const decrementButton = screen.getByTitle('decrement');
      const inputRange = screen.getByTitle('range') as HTMLInputElement;

      fireEvent.click(decrementButton);

      expect(decrementButton).toHaveAttribute('disabled');
      expect(inputRange.value).toBe('0');
    });

    it("doesn't trigger onChange when tries to decrement lower than min", () => {
      const onChange = jest.fn();

      const ControlledInputRangeWithControls = () => {
        const [value] = useState(100);

        return <InputRange aria-label="slider" controls min={100} max={200} value={value} onChange={onChange} />;
      };

      render(<ControlledInputRangeWithControls />);

      const decrementButton = screen.getByTitle('decrement');

      fireEvent.click(decrementButton);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('renders disabled increment button when value is same as max', () => {
      const ControlledInputRangeWithControls = () => {
        const [value, setValue] = useState(200);

        return <InputRange aria-label="slider" controls max={200} value={value} onChange={setValue} />;
      };

      render(<ControlledInputRangeWithControls />);

      const incrementButton = screen.getByTitle('increment');
      const inputRange = screen.getByTitle('range') as HTMLInputElement;

      expect(incrementButton).toHaveAttribute('disabled');
      expect(inputRange.value).toBe('200');
    });

    it('disables the increment button when value reaches max', () => {
      const ControlledInputRangeWithControls = () => {
        const [value, setValue] = useState(199);

        return <InputRange aria-label="slider" controls max={200} value={value} onChange={setValue} />;
      };

      render(<ControlledInputRangeWithControls />);

      const incrementButton = screen.getByTitle('increment');
      const inputRange = screen.getByTitle('range') as HTMLInputElement;

      fireEvent.click(incrementButton);

      expect(incrementButton).toHaveAttribute('disabled');
      expect(inputRange.value).toBe('200');
    });

    it("doesn't trigger onChange when tries to increment higher than max", () => {
      const onChange = jest.fn();

      const ControlledInputRangeWithControls = () => {
        const [value] = useState(100);

        return <InputRange aria-label="slider" controls max={100} value={value} onChange={onChange} />;
      };

      render(<ControlledInputRangeWithControls />);

      const incrementButton = screen.getByTitle('increment');

      fireEvent.click(incrementButton);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should return a numeric value when input changes', () => {
      const onChange = jest.fn();

      const ControlledInputRangeWithControls = () => {
        const [value] = useState(199);

        return <InputRange aria-label="slider" controls max={200} value={value} onChange={onChange} />;
      };

      render(<ControlledInputRangeWithControls />);

      const inputRange = screen.getByTitle('range') as HTMLInputElement;

      fireEvent.change(inputRange, { target: { value: '198' } });

      expect(onChange).toHaveBeenCalledWith(198);
    });
  });

  it('renders the component with no a11y violations', async () => {
    const ControlledInputRange = () => {
      const [value, setValue] = useState(51);

      return <InputRange aria-label="slider" value={value} onChange={setValue} />;
    };

    const { container } = render(<ControlledInputRange />);
    const results = await axe(container.innerHTML);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
