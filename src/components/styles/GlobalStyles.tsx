import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { alverata, openSans } from '../../constants/fonts';

// Universal box sizing with Inheritance. More info: https://css-tricks.com/box-sizing/#article-header-id-6
const boxSizing = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const defaultFont = css`
  html,
  body {
    font-family: ${openSans};
    font-size: 14px;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${alverata};
  }
`;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${defaultFont}
  ${boxSizing}
`;

export default GlobalStyles;
