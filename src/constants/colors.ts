export type TTextHexColors = '#FFFFFF' | '#63637E' | '#0D0A38' | '#1EC06A' | '#EE0505';

export interface IBaseColorSpec {
  primary: '#00B9A7';
  secondary: '#4A3EDE';
}

export interface INeutralColorSpec {
  white: '#FFFFFF';
  nearWhite: '#F8F8F8';
  light: '#EAEAEE';
  medium: '#DCDBE2';
  nearDark: '#63637E';
  dark: '#0D0A38';
}

export interface ISemanticColorSpec {
  success: '#1EC06A';
  alert: '#FFB428';
  error: '#EE0505';
}

interface IColorSpec {
  base: IBaseColorSpec;
  neutral: INeutralColorSpec;
  semantic: ISemanticColorSpec;
}

export const colors: IColorSpec = {
  base: {
    primary: '#00B9A7',
    secondary: '#4A3EDE',
  },
  neutral: {
    white: '#FFFFFF',
    nearWhite: '#F8F8F8',
    light: '#EAEAEE',
    medium: '#DCDBE2',
    nearDark: '#63637E',
    dark: '#0D0A38',
  },
  semantic: {
    success: '#1EC06A',
    alert: '#FFB428',
    error: '#EE0505',
  },
};
