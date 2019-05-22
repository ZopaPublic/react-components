import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import Modal from './Modal';

describe('<Modal />', () => {
  it('render the opened Modal', async () => {
    Modal.setAppElement('body');
    const { getByText } = render(<Modal isOpen>text</Modal>);
    const modal = await waitForElement(() => getByText('text'));
    expect(modal).toMatchSnapshot();
  });
});
