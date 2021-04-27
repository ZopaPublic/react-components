import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpiryModal from './ExpiryModal';
import Modal from '../Modal/Modal';

describe('<ExpiryModal />', () => {
  const endSession = jest.fn();
  const keepSession = jest.fn();

  const hint = 'Your session is about to expire';
  const explanation = "You've gone quiet. What would you like to do?";

  beforeEach(() => Modal.setAppElement('body'));

  it('renders nothing when not open', () => {
    const { queryByText } = render(
      <ExpiryModal isOpen={false} onEndSession={endSession} onKeepSession={keepSession} />,
    );

    expect(queryByText(hint)).toBe(null);
    expect(queryByText(explanation)).toBe(null);
  });

  describe('When open...', () => {
    it("hints the user what's happening", () => {
      const { getByText } = render(<ExpiryModal isOpen={true} onEndSession={endSession} onKeepSession={keepSession} />);

      getByText(hint);
      getByText(explanation);
    });

    it('renders with full opacity background', () => {
      const { baseElement } = render(
        <ExpiryModal isOpen={true} onEndSession={endSession} onKeepSession={keepSession} />,
      );
      expect(baseElement.getElementsByClassName('zopa-modal-overlay-full-opacity').length).toBe(1);
    });

    it('offers the user two actions', () => {
      const { getByText } = render(<ExpiryModal isOpen={true} onEndSession={endSession} onKeepSession={keepSession} />);

      getByText('Continue');
      getByText('Log out');
    });

    it('calls the corresponding handler when clicking on an action', () => {
      const { getByText } = render(<ExpiryModal isOpen={true} onEndSession={endSession} onKeepSession={keepSession} />);

      expect(keepSession).not.toHaveBeenCalled();
      fireEvent.click(getByText('Continue'));
      expect(keepSession).toHaveBeenCalledTimes(1);

      expect(endSession).not.toHaveBeenCalled();
      fireEvent.click(getByText('Log out'));
      expect(endSession).toHaveBeenCalledTimes(1);
    });
  });
});
