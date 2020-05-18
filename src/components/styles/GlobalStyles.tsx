import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { typography } from '../../constants/typography';
import { spacing } from './Spacing';

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
    font-family: ${typography.primary};
    font-size: ${typography.sizes.text.body};
    line-height: 1.4;
  }
`;

const imagery = css`
  img {
    max-width: 100%;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${defaultFont}
  ${boxSizing}
  ${imagery}
  body {
    ${spacing}
  }
`;

export default GlobalStyles;
