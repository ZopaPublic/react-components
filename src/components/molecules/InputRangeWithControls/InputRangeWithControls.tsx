import React, { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import grid from '../../../constants/grid';
import InputRange, { IInputRange } from '../../atoms/InputRange/InputRange';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  padding: 12px;

  @media (min-width: ${grid.breakpoints.m}px) {
    padding: 16px;
  }
`;

const SButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;

  @media (min-width: ${grid.breakpoints.m}px) {
    width: 50px;
    height: 50px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  display: block;
  font-size: 12px;

  @media (min-width: ${grid.breakpoints.m}px) {
    font-size: 20px;
  }
`;

export interface IInputRangeWithControls extends Omit<IInputRange, 'onChange'> {
  onChange: (value: number) => void;
}

const InputRangeWithControls = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  ...otherProps
}: IInputRangeWithControls) => {
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
      <ButtonWrapper>
        <SButton title="decrement" styling="secondary" disabled={value <= min} onClick={decrement}>
          <Icon icon={faMinus} />
        </SButton>
      </ButtonWrapper>
      <InputRange
        {...otherProps}
        title="range"
        max={max}
        min={min}
        step={step}
        value={value}
        onChange={onChangeHandler}
      />
      <ButtonWrapper>
        <SButton title="increment" styling="secondary" disabled={value >= max} onClick={increment}>
          <Icon icon={faPlus} />
        </SButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default InputRangeWithControls;
