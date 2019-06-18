import React from 'react';
import { render } from '@testing-library/react';
import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Hamburger active size="24px" activeColor="black" inactiveColor="gray" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
