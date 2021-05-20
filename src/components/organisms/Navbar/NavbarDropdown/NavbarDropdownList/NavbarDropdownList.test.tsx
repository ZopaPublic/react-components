import React from 'react';
import { render } from '@testing-library/react';
import NavbarDropdownList from './NavbarDropdownList';

describe('NavbarDropdownList', () => {
  it('renders the component with props', () => {
    const ref = React.createRef<HTMLUListElement>();
    const { container } = render(
      <NavbarDropdownList ref={ref} open={true}>
        list
      </NavbarDropdownList>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with open false', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1281 });

    const ref = React.createRef<HTMLUListElement>();
    const { container } = render(
      <NavbarDropdownList ref={ref} open={false}>
        list
      </NavbarDropdownList>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
