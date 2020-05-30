import React, { InputHTMLAttributes, ChangeEvent, MouseEvent, forwardRef } from 'react';
import { calculateTrackPosition } from './helpers';
import { Button, Icon, Input, Wrapper } from './styles';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export interface InputRange extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'> {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  controls?: boolean;
}

const InputRange = forwardRef<HTMLInputElement, InputRange>(
  ({ min = 0, max = 100, step = 1, controls = false, value, onChange, ...otherProps }, ref) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(Number(e.target.value));
    };

    const decrement = (e: MouseEvent) => {
      e.preventDefault();
      onChange(value - step);
    };

    const increment = (e: MouseEvent) => {
      e.preventDefault();
      onChange(value + step);
    };

    return (
      <Wrapper>
        {controls && (
          <Button title="decrement" styling="secondary" disabled={value <= min} onClick={decrement}>
            <Icon variant={faMinus} width="12px" height="12px" />
          </Button>
        )}
        <Input
          {...otherProps}
          role="slider"
          trackPosition={calculateTrackPosition({ min, max, value })}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChangeHandler}
          type="range"
          title="range"
          ref={ref}
        />
        {controls && (
          <Button title="increment" styling="secondary" disabled={value >= max} onClick={increment}>
            <Icon variant={faPlus} width="12px" height="12px" />
          </Button>
        )}
      </Wrapper>
    );
  },
);

export default InputRange;
