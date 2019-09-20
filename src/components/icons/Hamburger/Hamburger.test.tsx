import React from 'react';
import { render } from '@testing-library/react';
import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  const defaultProps = {
    size: '24px',
    activeColor: 'blue',
    inactiveColor: 'gray',
  };

  it('renders the component with props', () => {
    const { container } = render(<Hamburger {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a different colour when not active', () => {
    const { container } = render(<Hamburger {...defaultProps} active={true} />);
    const iconColor = container.querySelector('path').getAttribute('fill');
    expect(iconColor).toBe(`blue`);
  });
});
