import { createGlobalStyle } from 'styled-components';

import tippyCSS from 'tippy.js/dist/tippy.css';
import tippyAnimationCSS from 'tippy.js/animations/shift-toward.css';

const TooltipStyles = createGlobalStyle`
  ${tippyCSS}
  ${tippyAnimationCSS}
`;

export default TooltipStyles;
