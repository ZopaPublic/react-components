import React from 'react';
import { render } from 'react-testing-library';
import Navbar from '../Navbar';

describe('<Navbar.Layout />', () => {
  it('should render component with default props', () => {
    const { container } = render(<Navbar.Layout />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with all the props', () => {
    const left = <span>left</span>;
    const center = <span>center</span>;
    const right = <span>right</span>;
    const { container } = render(<Navbar.Layout left={left} center={center} right={right} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
