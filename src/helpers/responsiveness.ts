import { css } from 'styled-components';

export type TDeviceSizes = 'tablet' | 'phone' | 'desktop';

export const breakpoints = {
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

function interpolate(sizeLabel: keyof typeof breakpoints, direction: 'min' | 'max') {
  return (style: TemplateStringsArray, ...rest: any) => css`
    @media (${direction}-width: ${breakpoints[sizeLabel]}px) {
      ${style};
      ${rest};
    }
  `;
}

export { maxMedia, minMedia };
