import React from 'react';
import { render } from '@testing-library/react';
import NavbarLink from './NavbarLink';

describe('<Navbar.Link />', () => {
  it('should render component with default props', () => {
    const { container } = render(<NavbarLink />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with specific props', () => {
    const { container } = render(<NavbarLink active open withChevron isDropdownLink />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
