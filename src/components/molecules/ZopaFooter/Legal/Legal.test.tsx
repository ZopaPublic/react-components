import React from 'react';
import { render } from '@testing-library/react';
import Legal from './Legal';

describe('<Legal />', () => {
  it('renders the component', async () => {
    const { container } = render(<Legal />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
