import React from 'react';
import { render } from '@testing-library/react';

import Four0Four from './Four0Four';

describe('<Four0Four />', () => {
  it('renders with all the props', () => {
    const { container } = render(<Four0Four />);
    expect(container).toMatchSnapshot();
  });
});
