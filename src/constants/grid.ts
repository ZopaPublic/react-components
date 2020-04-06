export type TGridBreakpoints = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TGridWidths = 's' | 'm' | 'l' | 'xl';

interface IGrid {
  breakpoints: Record<TGridBreakpoints, number>;
  cols: number;
  gutter: number;
  width: Record<TGridWidths, number>;
}

const grid: IGrid = {
  breakpoints: {
    l: 992,
    m: 768,
    s: 576,
    xl: 1300,
    xs: 0,
  },
  cols: 12,
  gutter: 12,
  width: {
    l: 960,
    m: 720,
    s: 540,
    xl: 1224,
  },
};

export default grid;
