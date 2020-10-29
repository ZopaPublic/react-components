import React from 'react';
import { render } from '@testing-library/react';

import FiveHundred from './FiveHundred';

describe('<FiveHundred />', () => {
  it('renders with all the props', () => {
    const { container } = render(<FiveHundred />);
    expect(container).toMatchSnapshot();
  });
});
