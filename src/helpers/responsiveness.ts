import { css } from 'styled-components';

export type TDeviceSizes = 'tablet' | 'phone' | 'desktop' | string;

type TDeviceMediaStyledComponentFunctions = { [index in TDeviceSizes]: typeof css };

// TODO: Consider the breakpoints defined by google's material design https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
const sizes = {
  desktop: 1280,
  phone: 600,
  tablet: 720,
};

// TODO: this needs to be cleaned out once we have the official breakpoints, as well as the responsive strategy (which might not be JS based).
// TODO: either remove usage of reduce, or create usable types to be used. Not sure the types are being inferred properly through reduce.
export const maxMedia: TDeviceMediaStyledComponentFunctions = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = style => css`
    @media (max-width: ${sizes[label]}px) {
      ${style};
    }
  `;
  return accumulator;
}, {});

export const minMedia: TDeviceMediaStyledComponentFunctions = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = style => css`
    @media (min-width: ${sizes[label]}px) {
      ${style};
    }
  `;
  return accumulator;
}, {});
