import React from 'react';
import { render } from '@testing-library/react';
import ZopaIcon from './ZopaIcon';

describe('<ZopaIcon />', () => {
  it('renders the component with default props', () => {
    const { container } = render(<ZopaIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with props', () => {
    const { container } = render(<ZopaIcon width="70px" height="50px" color="red" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
