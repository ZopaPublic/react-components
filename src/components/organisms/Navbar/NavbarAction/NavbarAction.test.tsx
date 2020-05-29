import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';

describe('<Navbar />', () => {
  it('should render component with default props', () => {
    const { container } = render(<Navbar.Action />);
    expect(container).toMatchSnapshot();
  });

  it('should render component with custom text', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });

    render(<Navbar.Action>My Account</Navbar.Action>);
    const button = screen.getByText('My Account');
    expect(button).toBeInTheDocument();
  });
});
