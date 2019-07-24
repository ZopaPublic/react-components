import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Profile active size="24px" activeColor="black" inactiveColor="gray" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
