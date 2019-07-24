import React from 'react';
import { render } from '@testing-library/react';
import Twitter from './Twitter';

describe('<Twitter />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Twitter size="40px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
