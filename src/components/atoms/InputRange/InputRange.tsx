import React, { InputHTMLAttributes, useState, ChangeEvent, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import arrowsAltH from '../../../content/images/arrows-alt-h.svg';
import { colors } from '../../../constants/colors';
import grid from '../../../constants/grid';
import { calculateTrackPosition } from './helpers';

const trackHeight = 8;
const thumbDiameter = 50;
const thumbDiameterMobile = 30;

const TrackStyles = css`
  box-sizing: border-box;
  border: none;
  border-radius: ${trackHeight / 2}px;
  height: ${trackHeight}px;
  background: ${colors.greyLighter};
`;

const ThumbStyles = css`
  box-sizing: border-box;
  border: none;
  border-radius: 50%;
  width: ${thumbDiameterMobile}px;
  height: ${thumbDiameterMobile}px;
  background: ${colors.actionPlain};

  @media (min-width: ${grid.breakpoints.m}px) {
    width: ${thumbDiameter}px;
    height: ${thumbDiameter}px;
    background: url(${arrowsAltH}) no-repeat ${colors.actionPlain};
    background-position: center center;
    background-size: 20px 20px;
  }
`;

const ThumbStylesFocus = css`
  background: ${colors.actionPlain};
`;

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  trackPosition: number;
}

const SInputRange = styled.input<IInput>`
  -webkit-appearance: none;
  width: 100%;
  height: ${thumbDiameterMobile}px;
  cursor: pointer;

  @media (min-width: ${grid.breakpoints.m}px) {
    height: ${thumbDiameter}px;
  }

  &::-webkit-slider-runnable-track {
    ${TrackStyles}
  }
  &::-moz-range-track {
    ${TrackStyles}
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: ${(trackHeight - thumbDiameterMobile) * 0.5}px;
    ${ThumbStyles}
    
    @media (min-width: ${grid.breakpoints.m}px) {
       margin-top: ${(trackHeight - thumbDiameter) * 0.5}px;
    }
  }
  &::-moz-range-thumb {
    ${ThumbStyles}
  }

  &::-webkit-slider-runnable-track {
    background: -webkit-gradient(
      linear,
      0% 0%,
      100% 0%,
      color-stop(${({ trackPosition }) => trackPosition}, ${colors.actionPlain}),
      color-stop(${({ trackPosition }) => trackPosition}, ${colors.greyLighter})
    );
  }
  &::-moz-range-progress {
    border-radius: ${trackHeight / 2}px;
    height: ${trackHeight}px;
    background: ${colors.actionPlain};
  }

  &:active {
    &::-webkit-slider-thumb {
      ${ThumbStylesFocus}
    }
    &::-moz-range-thumb {
      ${ThumbStylesFocus}
    }
  }

  &:focus {
    outline: none;
  }

  ::-moz-focus-outer {
    border: 0;
  }
`;

interface IInputRange extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
}

const InputRange = ({ min = 0, max = 100, onChange, ...otherProps }: IInputRange) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [trackPosition, setTrackPosition] = useState(0.5);

  const calculateTrackPositionFromInput = (input: HTMLInputElement) => {
    return calculateTrackPosition({ min: Number(input.min), max: Number(input.max), value: Number(input.value) });
  };

  useEffect(() => {
    inputRef.current && setTrackPosition(calculateTrackPositionFromInput(inputRef.current));
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTrackPosition(calculateTrackPositionFromInput(e.target));
    onChange && onChange(e);
  };

  return (
    <SInputRange
      {...otherProps}
      role="slider"
      trackPosition={trackPosition}
      min={min}
      max={max}
      onChange={onChangeHandler}
      type="range"
      ref={inputRef}
    />
  );
};

export default InputRange;
