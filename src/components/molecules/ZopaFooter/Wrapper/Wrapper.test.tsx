import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from './Wrapper';

describe('<Wrapper />', () => {
  it('renders the component', async () => {
    const { container } = render(<Wrapper />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
