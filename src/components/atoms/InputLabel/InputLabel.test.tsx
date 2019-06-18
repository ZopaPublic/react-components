import React from 'react';
import { render } from '@testing-library/react';
import InputLabel from './InputLabel';

describe('<InputLabel />', () => {
  it('renders the component with props', () => {
    const { container } = render(<InputLabel htmlFor="username">Username:</InputLabel>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
