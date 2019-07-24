import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
  it('can render un-opened', async () => {
    Modal.setAppElement('body');
    const { queryByText } = render(<Modal isOpen={false}>text</Modal>);

    expect(queryByText('text')).toBe(null);
  });

  it('can render opened', async () => {
    Modal.setAppElement('body');
    const { getByText } = render(<Modal isOpen>text</Modal>);

    const modal = await waitForElement(() => getByText('text'));
    expect(modal).toMatchSnapshot();
  });

  it('allows to set global styles', () => {
    render(<Modal.Styles />);

    const [globalModalStyles] = getGlobalStyleTags();
    expect(globalModalStyles).toMatchSnapshot();
  });

  it('allows to set the `z-index` for the modal portal', () => {
    const expectedZIndex = 100;
    render(<Modal.Styles zIndex={expectedZIndex} />);

    const [globalModalStyles] = getGlobalStyleTags();
    expect(globalModalStyles).toContain(`z-index:${expectedZIndex}`);
  });
});

function getGlobalStyleTags() {
  return Array.from(document.querySelectorAll('style')).map(styleTag =>
    styleTag.innerHTML.trim().replace(/\s+/gm, ' '),
  );
}
