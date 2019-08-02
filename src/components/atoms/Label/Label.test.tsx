import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('<Label />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Label htmlFor="username">Username:</Label>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
