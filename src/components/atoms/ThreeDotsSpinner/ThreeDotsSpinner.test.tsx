import React from 'react';
import axe from '../../../../axe-helper';
import { render } from '@testing-library/react';
import ThreeDotsSpinner from './ThreeDotsSpinner';

describe('<ThreeDotsSpinner />', () => {
  it('renders three dots spinner', async () => {
    const { container } = render(<ThreeDotsSpinner />);
    expect(container).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
