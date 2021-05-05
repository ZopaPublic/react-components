export const breakpoints = {
  largeDesktop: 1200,
  desktop: 992,
  phone: 576,
  tablet: 768,
} as const;

export type DeviceSizes = keyof typeof breakpoints;
