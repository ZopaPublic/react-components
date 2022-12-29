const brandColors = {
  brand: '#009E8E',
  brandDark: '#063737',
  brandLight: '#ECFCF9',
  brandDecorative: '#00D9C5',
} as const;

const actionColors = {
  action: 'linear-gradient(90deg, #4F5AD8 0%, #3B46C4 100%)',
  actionPlain: '#3B46C4',
  actionDark: '#21247F',
  actionLight: '#E9EAFA',
} as const;

const neutralColors = {
  white: '#FFFFFF',
  greyLightest: '#F7F7F7',
  greyLighter: '#EFEFEF',
  greyLight: '#D4D7D9',
  grey: '#818F9B',
  greyDark: '#4A545E',
  greyDarkest: '#2C3236',
} as const;

const notificationColors = {
  alert: '#FF4539',
  alertDark: '#940700',
  alertLight: '#FFDAD8',
  warning: '#FF9F0A',
  warningDark: '#704300',
  warningLight: '#FFECCE',
  success: '#3EBC64',
  successDark: '#17592B',
  successLight: '#DDFDE5',
} as const;

export type Colors = typeof brandColors & typeof actionColors & typeof neutralColors & typeof notificationColors;

const colors: Colors = {
  ...brandColors,
  ...actionColors,
  ...neutralColors,
  ...notificationColors,
};

export {
  colors,
  // Exported only for documentation purposes in `<Colors />`
  brandColors,
  actionColors,
  neutralColors,
  notificationColors,
};
