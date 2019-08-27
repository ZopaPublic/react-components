import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});
