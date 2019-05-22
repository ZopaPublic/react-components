import React from 'react';
import { render } from 'react-testing-library';
import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Hamburger active size="24px" activeColor="black" inactiveColor="gray" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
