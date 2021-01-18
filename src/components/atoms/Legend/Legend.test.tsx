import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Legend from './Legend';

describe('<Legend />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<Legend />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
