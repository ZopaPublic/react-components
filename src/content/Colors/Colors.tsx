import React from 'react';
import styled from 'styled-components';
import { colors } from './../../constants/colors';

export type TColorNames = keyof typeof colors.base | keyof typeof colors.neutral | keyof typeof colors.semantic;

interface ISColorProps {
  color: string;
  colorName: string;
}

const SColors = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const mapColorToFontColor: { [K in TColorNames]: 'white' | 'black' } = {
  primary: 'white',
  secondary: 'white',
  white: 'black',
  light: 'black',
  medium: 'black',
  dark: 'white',
  success: 'white',
  alert: 'black',
  error: 'white',
};

const SColor = styled.div<ISColorProps>`
  background-color: ${({ color }) => color};
  margin: 5px;
  border: 1px solid #efefef;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  font-family: monospace;

  > p {
    color: ${({ colorName }) => mapColorToFontColor[colorName]};
    text-align: center;
    padding: 10px 20px;
    line-height: 18px;
    font-size: 16px;
  }
`;

export interface IColorsProps {
  /**
   * section of the default colors
   * @ignore
   */
  variant: keyof typeof colors;
}

export default function Colors({ variant }: IColorsProps) {
  const colorGroup = colors[variant];

  return (
    <SColors>
      {Object.keys(colorGroup).map(colorKey => (
        <SColor key={colorKey} color={colorGroup[colorKey]} colorName={colorKey}>
          <p>
            {colorKey}
            <br />
            {colorGroup[colorKey]}
          </p>
        </SColor>
      ))}
    </SColors>
  );
}
