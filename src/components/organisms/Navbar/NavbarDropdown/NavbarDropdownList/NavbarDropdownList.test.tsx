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
});
