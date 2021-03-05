import React, { FC, ReactElement } from 'react';
import ReactModal from 'react-modal';
import ModalStyles from './ModalStyles/ModalStyles';
import Icon from '../../atoms/Icon/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import styled from 'styled-components';
import { CardProps } from '../../organisms/Card/Card/Card';

export interface ModalProps extends ReactModal.Props {
  showCloseButton?: boolean;
  children: ReactElement<CardProps>;
}

type ModalComponent = FC<ModalProps> & {
  Styles: typeof ModalStyles;
  setAppElement: typeof ReactModal.setAppElement;
};

const CrossIcon = styled(Icon)`
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
`;

const classNames = {
  afterOpen: 'zopa-modal--after-open',
  base: 'zopa-modal mx-4',
  beforeClose: 'zopa-modal--before-close',
};

const overlayClassNames = {
  afterOpen: 'zopa-modal-overlay--after-open',
  base: 'zopa-modal-overlay',
  beforeClose: 'zopa-modal-overlay--before-close',
};

const Modal: ModalComponent = ({ children, onRequestClose, showCloseButton = true, ...rest }) => (
  <ReactModal
    bodyOpenClassName="zopa-modal-body--open"
    portalClassName="zopa-modal-portal"
    className={classNames}
    overlayClassName={overlayClassNames}
    closeTimeoutMS={200}
    {...rest}
  >
    {showCloseButton && (
      <CrossIcon
        onClick={onRequestClose}
        color={colors.grey}
        variant={faTimes}
        size="lg"
        data-automation="ZA.modal-cross-icon"
      />
    )}
    {children}
  </ReactModal>
);

Modal.Styles = ModalStyles;
Modal.setAppElement = ReactModal.setAppElement;

export default Modal;
