import React from 'react';
import ReactModal from 'react-modal';
import ModalStyles from './ModalStyles/ModalStyles';
import Icon from '../../atoms/Icon/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import styled from 'styled-components';
import { spacing } from '../../../constants/spacing';
import { CardProps } from '../../organisms/Card/Card/Card';

export interface ModalProps extends ReactModal.Props {
  showCloseButton?: boolean;
  hideBackground?: boolean;
  children: React.ReactElement<CardProps>;
}

const Button = styled.button`
  border: 0;
  background: transparent;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  padding: ${spacing[3]};
  z-index: 3;
`;

const classNames = {
  afterOpen: 'zopa-modal--after-open',
  base: 'zopa-modal mx-4',
  beforeClose: 'zopa-modal--before-close',
};

const overlayClassNames = (hideBackground: boolean) => ({
  afterOpen: 'zopa-modal-overlay--after-open',
  base: `zopa-modal-overlay${hideBackground ? '-full-opacity' : ''}`,
  beforeClose: 'zopa-modal-overlay--before-close',
});

const Modal = ({ children, onRequestClose, showCloseButton = true, hideBackground = false, ...rest }: ModalProps) => (
  <ReactModal
    bodyOpenClassName="zopa-modal-body--open"
    portalClassName="zopa-modal-portal"
    className={classNames}
    overlayClassName={overlayClassNames(hideBackground)}
    closeTimeoutMS={200}
    onRequestClose={onRequestClose}
    {...rest}
  >
    {showCloseButton && (
      <Button type="button" onClick={onRequestClose}>
        <span className="sr-only">Close Modal</span>
        <Icon color={colors.grey} variant={faTimes} size="lg" data-automation="ZA.modal-cross-icon" />
      </Button>
    )}
    {children}
  </ReactModal>
);

export default Object.assign(Modal, {
  setAppElement: ReactModal.setAppElement,
  Styles: ModalStyles,
});
