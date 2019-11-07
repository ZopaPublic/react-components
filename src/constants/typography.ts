const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const typography = {
  primary: `"Open Sans",${systemFontStack}`,
  sizes: {
    text: {
      base: '16px',
      small: '14px',
    },
    heading: {
      h1: '48px',
      h2: '28px',
      h3: '24px',
      h4: '20px',
      h5: '20px',
      h6: '20px',
    },
  },
  weights: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    text: 1.6,
    heading: 1.1,
  },
};

export { typography };
