import { css } from 'styled-components';

export type TDeviceSizes = 'tablet' | 'phone' | 'desktop';

// TODO: Consider the breakpoints defined by google's material design https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
const sizes = {
  desktop: 1280,
  phone: 600,
  tablet: 720,
};

const maxMedia = {
  phone: interpolate('phone', 'max'),
  tablet: interpolate('tablet', 'max'),
  desktop: interpolate('desktop', 'max'),
};

const minMedia = {
  phone: interpolate('phone', 'min'),
  tablet: interpolate('tablet', 'min'),
  desktop: interpolate('desktop', 'min'),
};

function interpolate(sizeLabel: keyof typeof sizes, direction: 'min' | 'max') {
  return (style: TemplateStringsArray, ...rest: any) => css`
    @media (${direction}-width: ${sizes[sizeLabel]}px) {
      ${style};
      ${rest};
    }
  `;
}

export { maxMedia, minMedia };
