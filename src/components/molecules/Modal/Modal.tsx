import React from 'react';
import ReactModal from 'react-modal';
import ModalStyles from './ModalStyles/ModalStyles';

export type ModalProps = ReactModal.Props;

class Modal extends React.PureComponent<ModalProps> {
  public static Styles = ModalStyles;
  public static setAppElement = ReactModal.setAppElement;

  public render() {
    const { children, ...rest } = this.props;

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

    return (
      <ReactModal
        bodyOpenClassName="zopa-modal-body--open"
        portalClassName="zopa-modal-portal"
        className={classNames}
        overlayClassName={overlayClassNames}
        closeTimeoutMS={200}
        {...rest}
      >
        {children}
      </ReactModal>
    );
  }
}

export default Modal;
