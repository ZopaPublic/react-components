import { createGlobalStyle } from 'styled-components';

import * as colors from '../../../../constants/colors';

interface IModalStylesPrsop {
  /**
   * The CSS `z-index` value to be applied on the rendered modal.
   * @default 2
   */
  zIndex?: number;
}

const ModalStyles = createGlobalStyle<IModalStylesPrsop>`
  .zopa-modal-body--open {
    overflow: hidden;
  }

  .zopa-modal-portal {
    position: relative;
    z-index: ${({ zIndex = 2 }) => zIndex};
  }

  .zopa-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.neutral.neutral800};
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  .zopa-modal-overlay--after-open {
    opacity: 1;
  }
  .zopa-modal-overlay--before-close {
    opacity: 0;
  }

  .zopa-modal {
    background-color: ${colors.base.white};
    max-height: 95%;
    overflow: auto;
  }
`;

export default ModalStyles;
