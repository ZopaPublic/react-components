import { IInputStatus } from '../components/types';
import { colors } from '../constants/colors';

export const mod = (x: number, n: number) => ((x % n) + n) % n;

export const getBorderColorByStatus = ({ hasError, isValid }: IInputStatus) =>
  hasError ? colors.alert : isValid ? colors.success : colors.greyLight;

// @see https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
export const shadeHexColor = (color: string, floatingPercent: number) => {
  /**
   * @param `floatingPercent` A number between -1 to 1. Positive is brighter and negative darker.
   *                          To make a color 8% darker: -0.08;
   *                          To make a color 50% lighter: 0.5;
   */

  const actualColor = parseInt(color.slice(1), 16);
  const transparency = floatingPercent < 0 ? 0 : 255;
  const actualPercent = floatingPercent < 0 ? floatingPercent * -1 : floatingPercent;
  const r = actualColor >> 16;
  const g = (actualColor >> 8) & 0x00ff;
  const b = actualColor & 0x0000ff;

  return (
    '#' +
    (
      0x1000000 +
      (Math.round((transparency - r) * actualPercent) + r) * 0x10000 +
      Math.round((transparency - g) * actualPercent + g) * 0x100 +
      (Math.round((transparency - b) * actualPercent) + b)
    )
      .toString(16)
      .slice(1)
  );
};
