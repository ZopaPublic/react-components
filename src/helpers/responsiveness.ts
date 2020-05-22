import { css } from 'styled-components';
import { breakpoints } from '../constants';
import { DeviceSizes } from '../constants/breakpoints';

type Media = Record<DeviceSizes, ReturnType<typeof interpolate>>;

const maxMedia: Media = {
  phone: interpolate('phone', 'max'),
  tablet: interpolate('tablet', 'max'),
  desktop: interpolate('desktop', 'max'),
};

const minMedia: Media = {
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
