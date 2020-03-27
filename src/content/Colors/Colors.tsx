import React from 'react';
import styled from 'styled-components';
import {
  colors,
  IColors,
  IBrandColors,
  IActionColors,
  INeutralColors,
  INotificationColors,
} from './../../constants/colors';

type TColorVariants = keyof IColors;

interface ISColorProps {
  color: string;
  colorName: TColorVariants;
}

interface IColorsProps {
  /**
   * section of the default colors
   * @ignore
   */
  variant: 'brand' | 'actions' | 'neutral' | 'notifications';
}

interface IColorGroups {
  brand: Array<keyof IBrandColors>;
  actions: Array<keyof IActionColors>;
  neutral: Array<keyof INeutralColors>;
  notifications: Array<keyof INotificationColors>;
}

const SColors = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const mapColorToFontColor: { [C in TColorVariants]: 'white' | 'black' } = {
  // Brand
  brand: 'white',
  brandDark: 'white',
  brandLight: 'black',
  // Actions
  action: 'white',
  actionPlain: 'white',
  actionDark: 'white',
  actionLight: 'black',
  // Neutral
  white: 'black',
  greyLightest: 'black',
  greyLighter: 'black',
  greyLight: 'black',
  grey: 'white',
  greyDark: 'white',
  greyDarkest: 'white',
  // Notifications
  alert: 'white',
  alertDark: 'white',
  alertLight: 'black',
  warning: 'white',
  warningDark: 'white',
  warningLight: 'black',
  success: 'white',
  successDark: 'white',
  successLight: 'black',
};

const colorGroups: IColorGroups = {
  brand: ['brand', 'brandDark', 'brandLight'],
  actions: ['action', 'actionPlain', 'actionDark', 'actionLight'],
  neutral: ['white', 'greyLightest', 'greyLighter', 'greyLight', 'grey', 'greyDark', 'greyDarkest'],
  notifications: [
    'alert',
    'alertDark',
    'alertLight',
    'warning',
    'warningLight',
    'warningDark',
    'success',
    'successLight',
    'successDark',
  ],
};

const SColor = styled.div<ISColorProps>`
  background: ${({ color }) => color};
  margin: 5px;
  border: 1px solid #efefef;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  font-family: monospace;

  > p {
    color: ${({ colorName }) => mapColorToFontColor[colorName]};
    text-align: center;
    padding: 10px 20px;
    line-height: 18px;
    font-size: 14px;
  }
`;

export default function Colors({ variant }: IColorsProps) {
  const colorGroup = colorGroups[variant] as string[];
  return (
    <SColors>
      {colorGroup.map((colorKey: string) => {
        const colorName = colorKey as TColorVariants;
        const actualColor = colorName === 'action' ? `#4F5AD8 to ${colors.actionPlain}` : colors[colorName];
        return (
          <>
            <SColor key={colorKey} color={colors[colorName]} colorName={colorName}>
              <p>
                {colorName}
                <br />
                {actualColor}
              </p>
            </SColor>
          </>
        );
      })}
    </SColors>
  );
}
