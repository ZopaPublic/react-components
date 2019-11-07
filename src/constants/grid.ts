export type TGridBreakpoints = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TGridWidths = 's' | 'm' | 'l' | 'xl';

interface IGrid {
  breakpoints: { [k in TGridBreakpoints]: number };
  cols: number;
  gutter: number;
  width: { [k in TGridWidths]: number };
}

const grid: IGrid = {
  breakpoints: {
    l: 992,
    m: 768,
    s: 576,
    xl: 1200,
    xs: 0,
  },
  cols: 12,
  gutter: 16,
  width: {
    l: 960,
    m: 720,
    s: 540,
    xl: 1140,
  },
};

export default grid;
