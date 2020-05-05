import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputRangeWithControls from './InputRangeWithControls';
import { axe } from 'jest-axe';

describe('<InputRangeWithControls />', () => {
  it('renders disabled decrement button when value is same as min', () => {
    const ControlledInputRangeWithControls = () => {
      const [value, setValue] = useState(0);

      return <InputRangeWithControls aria-label="slider" min={0} value={value} onChange={setValue} />;
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

      return <InputRangeWithControls aria-label="slider" min={0} value={value} onChange={setValue} />;
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

      return <InputRangeWithControls aria-label="slider" min={100} max={200} value={value} onChange={onChange} />;
    };

    render(<ControlledInputRangeWithControls />);

    const decrementButton = screen.getByTitle('decrement');

    fireEvent.click(decrementButton);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders disabled increment button when value is same as max', () => {
    const ControlledInputRangeWithControls = () => {
      const [value, setValue] = useState(200);

      return <InputRangeWithControls aria-label="slider" max={200} value={value} onChange={setValue} />;
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

      return <InputRangeWithControls aria-label="slider" max={200} value={value} onChange={setValue} />;
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

      return <InputRangeWithControls aria-label="slider" max={100} value={value} onChange={onChange} />;
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

      return <InputRangeWithControls aria-label="slider" max={200} value={value} onChange={onChange} />;
    };

    render(<ControlledInputRangeWithControls />);

    const inputRange = screen.getByTitle('range') as HTMLInputElement;

    fireEvent.change(inputRange, { target: { value: '198' } });

    expect(onChange).toHaveBeenCalledWith(198);
  });

  it('renders the component with no a11y violations', async () => {
    const ControlledInputRangeWithControls = () => {
      const [value, setValue] = useState(75);

      return <InputRangeWithControls aria-label="slider" value={value} onChange={setValue} />;
    };

    const { container } = render(<ControlledInputRangeWithControls />);
    const results = await axe(container.innerHTML);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
