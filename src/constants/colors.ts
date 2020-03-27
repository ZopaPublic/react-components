export interface IBrandColors {
  brand: '#00D9C5';
  brandDark: '#063737';
  brandLight: '#ECFCF9';
}

export interface IActionColors {
  action: 'linear-gradient(90deg, #4F5AD8 0%, #3B46C4 100%)';
  actionPlain: '#3B46C4';
  actionDark: '#21247F';
  actionLight: '#E9EAFA';
}

export interface INeutralColors {
  white: '#FFFFFF';
  greyLightest: '#F7F7F7';
  greyLighter: '#EFEFEF';
  greyLight: '#D4D7D9';
  grey: '#818F9B';
  greyDark: '#4A545E';
  greyDarkest: '#2C3246';
}

export interface INotificationColors {
  alert: '#FF4539';
  alertDark: '#940700';
  alertLight: '#FFDAD8';
  warning: '#FF9F0A';
  warningDark: '#704300';
  warningLight: '#FFECCE';
  success: '#3EBC64';
  successDark: '#17592B';
  successLight: '#DDFDE5';
}

export type IColors = IBrandColors & IActionColors & INeutralColors & INotificationColors;

export const colors: IColors = {
  // Brand
  brand: '#00D9C5',
  brandDark: '#063737',
  brandLight: '#ECFCF9',
  // Actions
  action: 'linear-gradient(90deg, #4F5AD8 0%, #3B46C4 100%)',
  actionPlain: '#3B46C4',
  actionDark: '#21247F',
  actionLight: '#E9EAFA',
  // Neutral
  white: '#FFFFFF',
  greyLightest: '#F7F7F7',
  greyLighter: '#EFEFEF',
  greyLight: '#D4D7D9',
  grey: '#818F9B',
  greyDark: '#4A545E',
  greyDarkest: '#2C3246',
  // Notifications
  alert: '#FF4539',
  alertDark: '#940700',
  alertLight: '#FFDAD8',
  warning: '#FF9F0A',
  warningDark: '#704300',
  warningLight: '#FFECCE',
  success: '#3EBC64',
  successDark: '#17592B',
  successLight: '#DDFDE5',
};

export type TTextHexColors = '#FFFFFF' | '#63637E' | '#0D0A38' | '#1EC06A' | '#EE0505';
export type TLinkHexColors = IActionColors['actionPlain'] | INeutralColors['white'];
