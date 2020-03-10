import { css } from 'styled-components';
import { breakpoints, TDeviceSizes } from '../constants/breakpoints';

type TMedia = Record<TDeviceSizes, ReturnType<typeof interpolate>>;

const maxMedia: TMedia = {
  phone: interpolate('phone', 'max'),
  tablet: interpolate('tablet', 'max'),
  desktop: interpolate('desktop', 'max'),
};

const minMedia: TMedia = {
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
