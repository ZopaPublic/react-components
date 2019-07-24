import React from 'react';
import { render } from '@testing-library/react';
import FlexCol from './FlexCol';

describe('<FlexCol />', () => {
  it('renders a FlexCol component', () => {
    const { container } = render(<FlexCol />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
