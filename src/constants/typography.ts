const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const typography = {
  primary: `"Open Sans",${systemFontStack}`,
  sizes: {
    text: {
      large: '16px',
      medium: '14px',
      small: '12px',
    },
    heading: {
      h1: '48px',
      h2: '28px',
      h3: '24px',
      h4: '20px',
    },
  },
  weights: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: 1.6,
};

export { typography };
