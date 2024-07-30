import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { colors, grid } from '../../../../constants';
import arrowsAltH from '../../../../content/images/arrows-alt-h.svg';

import { InputRange } from '../InputRange';
import { AppThemeProps } from '../../../styles/Theme';

interface InputRangeThemeProps extends AppThemeProps {}

const trackHeight = 8;

const TrackStyles = css`
  box-sizing: border-box;
  border: none;
  border-radius: ${trackHeight / 2}px;
  height: ${trackHeight}px;
  background: ${colors.greyLighter};
`;

const ThumbStyles = css<InputRangeThemeProps>`
  box-sizing: border-box;
  border: none;
  border-radius: 50%;
  width: ${({ theme }: InputRangeThemeProps) => `${theme.inputRange?.thumb.thumbDiameterMobile}px`};
  height: ${({ theme }: InputRangeThemeProps) => `${theme.inputRange?.thumb.thumbDiameterMobile}px`};
  background: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.thumb.thumbColor};

  @media (min-width: ${grid.breakpoints.m}px) {
    width: ${({ theme }: InputRangeThemeProps) => `${theme.inputRange?.thumb.thumbDiameter}px`};
    height: ${({ theme }: InputRangeThemeProps) => `${theme.inputRange?.thumb.thumbDiameter}px`};
    background: ${({ theme }: InputRangeThemeProps) =>
      theme.inputRange?.thumb.thumbIcon
        ? `url(${arrowsAltH}) no-repeat ${colors.actionPlain}`
        : `${theme.inputRange?.thumb.thumbColor}`};
    background-position: center center;
    background-size: 20px 20px;
  }
`;

const ThumbStylesFocus = css`
  box-shadow: ${({ theme }: InputRangeThemeProps) => `0 0 4px ${theme.inputRange?.thumb.thumbColor}`};
`;

export const Input = styled.input<
  Omit<InputRange, 'onChange'> & { trackPosition: number; onChange: (e: ChangeEvent<HTMLInputElement>) => void }
>`
  -webkit-appearance: none;
  width: 100%;
  height: ${({ theme }: InputRangeThemeProps) => `${theme.inputRange?.thumb.thumbDiameterMobile}px`};
  cursor: pointer;
  background: transparent;

  @media (min-width: ${grid.breakpoints.m}px) {
  height: ${({ theme }: InputRangeThemeProps) => `${theme.inputRange?.thumb.thumbDiameter}px`};
  }

  &::-webkit-slider-runnable-track {
    ${TrackStyles}
  }
  &::-moz-range-track {
    ${TrackStyles}
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: ${({ theme }) => (trackHeight - theme.inputRange?.thumb.thumbDiameterMobile) * 0.5}px;

    ${ThumbStyles}

    @media (min-width: ${grid.breakpoints.m}px) {
      margin-top: ${({ theme }: InputRangeThemeProps) =>
        `(${trackHeight - theme.inputRange?.thumb.thumbDiameterMobile}) * ${theme.inputRange?.thumb.marginTop}px`};
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
      color-stop(${({ trackPosition }) => trackPosition}, ${({ theme }: InputRangeThemeProps) =>
  theme.inputRange?.slider.lowerColor}),
      color-stop(${({ trackPosition }) => trackPosition}, ${({ theme }: InputRangeThemeProps) =>
  theme.inputRange?.slider.upperColor})
    );
  }
  &::-moz-range-progress {
    border-radius: ${trackHeight / 2}px;
    height: ${trackHeight}px;
    background: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.slider.lowerColor};
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
    background: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.slider.lowerColor};
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
