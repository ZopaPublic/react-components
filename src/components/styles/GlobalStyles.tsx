import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { typography } from '../../constants/typography';
import { version as tippyVersion } from 'tippy.js/package.json';

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
    font-size: ${typography.sizes.text.base};
  }
`;

const imagery = css`
  img {
    max-width: 100%;
  }
`;

const tooltipGlobalStyles = css`
  @import url('https://unpkg.com/tippy.js@${tippyVersion}/dist/tippy.css');
  @import url('https://unpkg.com/tippy.js@${tippyVersion}/animations/shift-toward.css');
`;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${defaultFont}
  ${boxSizing}
  ${imagery}
  ${tooltipGlobalStyles}
`;

export default GlobalStyles;
