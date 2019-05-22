import React from 'react';
import { render } from 'react-testing-library';
import InputLabel from './InputLabel';

describe('<InputLabel />', () => {
  it('renders the component with props', () => {
    const { container } = render(<InputLabel htmlFor="username">Username:</InputLabel>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
