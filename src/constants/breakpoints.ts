export const breakpoints = {
  desktop: 1280,
  phone: 600,
  tablet: 720,
} as const;

export type DeviceSizes = keyof typeof breakpoints;
