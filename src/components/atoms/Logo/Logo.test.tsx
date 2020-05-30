import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('<Logo />', () => {
  it('renders the component with default props', () => {
    const { container } = render(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with props', () => {
    const { container } = render(<Logo width="70px" height="50px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
