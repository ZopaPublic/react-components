import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { colors, grid } from '../../../../constants';
import arrowsAltH from '../../../../content/images/arrows-alt-h.svg';
import { InputRange } from '../InputRange';

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
  box-shadow: 0 0 4px ${colors.actionPlain};
`;

export const Input = styled.input<
  Omit<InputRange, 'onChange'> & { trackPosition: number; onChange: (e: ChangeEvent<HTMLInputElement>) => void }
>`
  -webkit-appearance: none;
  width: 100%;
  height: ${thumbDiameterMobile}px;
  cursor: pointer;
  background: transparent;

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

  &::-moz-focus-outer {
    border: 0;
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    /* Durty Rotten IE11 fix  */
    height: auto !important;
    margin-top: 12px;
  }

  &::-ms-track {
    ${TrackStyles}
    box-sizing: content-box;
    border: 0px solid transparent;
    width: 100%;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    ${TrackStyles}
    box-sizing: content-box;
    border: 0px solid transparent;
    background: ${colors.actionPlain};
  }

  &::-ms-fill-upper {
    ${TrackStyles}
    box-sizing: content-box;
    border: 0px solid transparent;
  }

  &::-ms-thumb {
    ${ThumbStyles}
    box-sizing: content-box;
  }
`;
