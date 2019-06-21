import React from 'react';
import styled from 'styled-components';
import * as defaultColors from './../../constants/colors';

export interface ISColorProps {
  color: string;
  colorName: string;
}

export const SColors = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const SColor = styled.div<ISColorProps>`
  height: 70px;
  width: 70px;
  background-color: ${({ color }) => color};
  margin: 5px;
  border: 1px solid #cbcbcb;
  border-radius: 2px;

  > p {
    color: ${({ color }) => color};
    filter: invert(100%);
    text-align: center;
    padding: 2px;
    line-height: 18px;
    font-size: ${({ color, colorName }) => 100 / Math.max(color.length, colorName.length)}px;
  }
`;

export interface IColorsProps {
  /**
   * Object with the colors for testing purposes.
   * The key must be the name of the color and the value the color itself as in css. (e.g: { red: '#ff0000' }).
   * @default defaultColors of Zopa
   * @ignore
   */
  colors?: {
    [colorName: string]: string;
  };
  /**
   * section of the default colors
   * @ignore
   */
  defaultSection: 'base' | 'primary' | 'extended' | 'neutral' | 'alert';
}

export default function Colors(props: IColorsProps) {
  const colors = props.colors || defaultColors[props.defaultSection];
  return (
    <SColors>
      {Object.keys(colors).map((colorKey, key) => (
        <SColor key={key} color={colors[colorKey]} colorName={colorKey}>
          <p>
            {colorKey}
            <br />
            {colors[colorKey]}
          </p>
        </SColor>
      ))}
    </SColors>
  );
}
