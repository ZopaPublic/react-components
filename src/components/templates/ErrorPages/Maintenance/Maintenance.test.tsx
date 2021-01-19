import React from 'react';
import { render } from '@testing-library/react';

import Maintenance from './Maintenance';

describe('<Maintenance />', () => {
  it('renders with all the props', () => {
    const { container } = render(<Maintenance />);
    expect(container).toMatchSnapshot();
  });
});
