import React from 'react';
import { render } from '@testing-library/react';
import Instagram from './Instagram';

describe('<Instagram />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Instagram size="40px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
