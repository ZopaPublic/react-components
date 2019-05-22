import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import NavbarDropdownList from './NavbarDropdownList';

describe('NavbarDropdownList', () => {
  it('renders the component with props', () => {
    const ref = React.createRef<HTMLUListElement>();
    const { container } = render(
      <NavbarDropdownList alignedTo="left" ref={ref}>
        list
      </NavbarDropdownList>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
