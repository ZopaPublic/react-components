const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const typography = {
  primary: `"Open Sans",${systemFontStack}`,
  sizes: {
    text: {
      lead: '18px',
      body: '15px',
      small: '13px',
    },
    heading: {
      display: '68px',
      h1: '48px',
      h2: '38px',
      h3: '28px',
      h4: '24px',
      h5: '18px',
      h6: '15px',
    },
  },
  weights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  lineHeights: {
    big: 1.4,
    medium: 1.2,
    small: 1,
  },
};

export { typography };
