import { createGlobalStyle, css } from 'styled-components';
import { colors } from '../../../../constants';

export interface ModalStylesProps {
  /**
   * The CSS `z-index` value to be applied on the rendered modal.
   */
  zIndex?: number;
}

const OverlayStyles = css<ModalStylesProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  z-index: ${({ zIndex = 2 }) => zIndex};
`;

const ModalStyles = createGlobalStyle<ModalStylesProps>`
  .zopa-modal-body--open {
    overflow: hidden;
  }

  .zopa-modal-portal {
    position: relative;
  }

  .zopa-modal-overlay {
    ${OverlayStyles}
    background-color: rgba(0,0,0,0.8);
  }

  .zopa-modal-overlay-full-opacity {
    ${OverlayStyles}
    background-color: ${colors.greyDarkest};
  }

  .zopa-modal-overlay--after-open {
    opacity: 1;
  }
  .zopa-modal-overlay--before-close {
    opacity: 0;
  }

  .zopa-modal {
    background-color: ${colors.white};
    max-height: 95%;
    overflow: auto;
    border-radius: 12px;
    position: relative;
    outline: none;
  }
`;

export default ModalStyles;
