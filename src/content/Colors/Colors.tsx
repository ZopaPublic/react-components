import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import {
  Colors as ColorsType,
  brandColors,
  actionColors,
  neutralColors,
  notificationColors,
} from '../../constants/colors';

type ColorVariants = keyof ColorsType;

interface ColorProps {
  color: string;
  colorName: ColorVariants;
}

interface ColorsProps {
  /**
   * section of the default colors
   * @ignore
   */
  variant: 'brand' | 'actions' | 'neutral' | 'notifications';
}

interface ColorGroups {
  brand: Array<string>;
  actions: Array<string>;
  neutral: Array<string>;
  notifications: Array<string>;
}

const ColorsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const colorGroups: ColorGroups = {
  brand: Object.keys(brandColors),
  actions: Object.keys(actionColors),
  neutral: Object.keys(neutralColors),
  notifications: Object.keys(notificationColors),
};

const Color = styled.div<ColorProps>`
  background: ${({ color }) => color};
  margin: 5px;
  border: 1px solid #efefef;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  font-family: monospace;

  > p {
    color: ${({ color }) => getContrastOfColor(color)};
    text-align: center;
    padding: 10px 20px;
    line-height: 18px;
    font-size: 14px;
  }
`;

export default function ColorsComponent({ variant }: ColorsProps) {
  const colorGroup = colorGroups[variant] as string[];
  return (
    <ColorsWrapper>
      {colorGroup.map((colorKey: string) => {
        const colorName = colorKey as ColorVariants;
        const actualColor = colorName === 'action' ? `#4F5AD8 to ${colors.actionPlain}` : colors[colorName];
        return (
          <React.Fragment key={colorKey}>
            <Color color={colors[colorName]} colorName={colorName}>
              <p>
                {colorName}
                <br />
                {actualColor}
              </p>
            </Color>
          </React.Fragment>
        );
      })}
    </ColorsWrapper>
  );
}

function getContrastOfColor(color: string) {
  const hex = color.charAt(0) === '#' ? color.substr(1, 6) : color;
  const hexR = parseInt(hex.substr(0, 2), 16);
  const hexG = parseInt(hex.substr(2, 2), 16);
  const hexB = parseInt(hex.substr(4, 2), 16);
  const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

  return contrastRatio >= 0.5 ? 'black' : 'white';
}
