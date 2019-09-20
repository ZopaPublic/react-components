import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  const defaultProps = {
    size: '24px',
    activeColor: 'blue',
    inactiveColor: 'gray',
  };

  it('renders the component with props', () => {
    const { container } = render(<Profile {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a different colour when not active', () => {
    const { container } = render(<Profile {...defaultProps} active={true} />);
    const iconColor = container.querySelector('path').getAttribute('fill');
    expect(iconColor).toBe(`blue`);
  });
});
