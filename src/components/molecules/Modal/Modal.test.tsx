import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal, { ModalProps } from './Modal';
import { getGlobalStyleTags } from '../../../helpers/test/styles';
import Card from '../../organisms/Card';

function renderModal(props: Omit<ModalProps, 'children'>) {
  return render(
    <Modal {...props}>
      <Card.Content>
        <Card.Heading>Title</Card.Heading>
        <Card.Text data-automation="check-card">text</Card.Text>
      </Card.Content>
    </Modal>,
  );
}

describe('<Modal />', () => {
  it('renders with semi opacity background', () => {
    Modal.setAppElement('body');
    const { baseElement } = renderModal({ isOpen: true });
    expect(baseElement.getElementsByClassName('zopa-modal-overlay').length).toBe(1);
  });

  it('renders with full opacity background', () => {
    Modal.setAppElement('body');
    const { baseElement } = renderModal({ isOpen: true, hideBackground: true });
    expect(baseElement.getElementsByClassName('zopa-modal-overlay-full-opacity').length).toBe(1);
  });

  it('can render un-opened', async () => {
    Modal.setAppElement('body');
    const { queryByTestId } = renderModal({ isOpen: false });

    expect(queryByTestId('check-card')).toBe(null);
  });

  it('can render opened', async () => {
    Modal.setAppElement('body');
    const { findByTestId } = renderModal({ isOpen: true });

    const modal = await findByTestId('check-card');
    expect(modal).toMatchSnapshot();
  });

  it('can be closed by clicking the close button', async () => {
    Modal.setAppElement('body');
    const toggleModal = jest.fn();
    const { findByTestId } = renderModal({ isOpen: true, onRequestClose: toggleModal });
    const closeButton = await findByTestId('ZA.modal-cross-icon');
    fireEvent.click(closeButton);
    expect(toggleModal).toBeCalledTimes(1);
  });

  it('should not show the close button if needed', async () => {
    Modal.setAppElement('body');
    const toggleModal = jest.fn();
    const { queryByTestId } = renderModal({ isOpen: true, onRequestClose: toggleModal, showCloseButton: false });
    expect(queryByTestId('ZA.modal-cross-icon')).toBe(null);
  });

  it('allows to set global styles', () => {
    render(<Modal.Styles />);
    const [globalModalStyles] = getGlobalStyleTags();
    expect(globalModalStyles).toMatchSnapshot();
  });
});
