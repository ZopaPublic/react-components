import React, { FC } from 'react';
import ReactModal from 'react-modal';
import ModalStyles from './ModalStyles/ModalStyles';
import Icon from '../../atoms/Icon/Icon';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import styled from 'styled-components';

export type ModalProps = ReactModal.Props & {
  showCloseButton?: boolean;
};

type ModalComponent = FC<ModalProps> & {
  Styles: typeof ModalStyles;
  setAppElement: typeof ReactModal.setAppElement;
};

const CrossIcon = styled(Icon).attrs({ color: colors.greyLight, variant: faTimesCircle })`
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
`;

const classNames = {
  afterOpen: 'zopa-modal--after-open',
  base: 'zopa-modal',
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
    {showCloseButton && <CrossIcon onClick={onRequestClose} />}
    {children}
  </ReactModal>
);

Modal.Styles = ModalStyles;
Modal.setAppElement = ReactModal.setAppElement;

export default Modal;
