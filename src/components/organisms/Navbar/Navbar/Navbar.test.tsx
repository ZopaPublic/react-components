import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '..';

describe('<Navbar />', () => {
  it('should render component with default props', () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with all the props', () => {
    const left = <span>left</span>;
    const center = <span>center</span>;
    const right = <span>right</span>;
    const { container } = render(<Navbar left={left} center={center} right={right} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
