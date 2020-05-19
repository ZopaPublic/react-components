import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '..';

describe('<Navbar />', () => {
  it('should render component with default props', () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with all the props', () => {
    const { container } = render(<Navbar overlayLogoWith={<a href="https://www.zopa.com"></a>}>Content</Navbar>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
