import React, { InputHTMLAttributes, ChangeEvent, MouseEvent, forwardRef } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { calculateTrackPosition } from './helpers';
import { Button, Icon, Input, Wrapper } from './styles';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AppThemeProps, useThemeContext } from '../../styles/Theme';

export interface InputRange extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'> {
  value: number;
  onChange: (value: number) => void;
  id?: string;
  min?: number;
  max?: number;
  customPlusIcon?: Element;
  customMinusIcon?: Element;
  step?: number;
  controls?: boolean;
}

interface InputRangeThemeProps extends AppThemeProps {}

const StyledWrapper = styled(Wrapper)<InputRangeThemeProps>`
  justify-content: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.justifyContent};
`;

const InputRange = forwardRef<HTMLInputElement, InputRange>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      controls = false,
      value,
      onChange,
      id,
      customPlusIcon,
      customMinusIcon,
      ...otherProps
    },
    ref,
  ) => {
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

    if (!id) {
      console.warn('Id is a required prop of the inputRange component');
    }

    const theme = useThemeContext();

    return (
      <StyledWrapper>
        {controls ? (
          <Button
            title="decrement"
            styling="secondary"
            disabled={value <= min}
            onClick={decrement}
            className={classnames(theme.inputRange?.button?.className)}
          >
            {customMinusIcon ? customMinusIcon : <Icon variant={faMinus} width="12px" height="12px" />}
          </Button>
        ) : null}
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
          theme={theme}
        />
        {controls ? (
          <Button
            title="increment"
            styling="secondary"
            disabled={value >= max}
            onClick={increment}
            className={classnames(theme.inputRange?.button?.className)}
          >
            {customPlusIcon ? customPlusIcon : <Icon variant={faPlus} width="12px" height="12px" />}
          </Button>
        ) : null}
      </StyledWrapper>
    );
  },
);

export default InputRange;
