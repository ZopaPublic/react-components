import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';

describe('<Navbar />', () => {
  it('should render small device navigation with default props', () => {
    const { container } = render(<Navbar>Content</Navbar>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render the hamburger icon when no content is added', () => {
    render(<Navbar />);
    const hamburgerIcon = screen.queryByTestId('hamburger-icon');
    expect(hamburgerIcon).not.toBeInTheDocument();
  });

  it('should render component with all the props', () => {
    const { container } = render(<Navbar overlayLogoWith={<a href="https://www.zopa.com"></a>}>Content</Navbar>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render large device navigation with default props', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });

    const { container } = render(<Navbar>Content</Navbar>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
