import axe from '../../../../axe-helper';
import { render } from '@testing-library/react';
import Banner from './Banner';
import React from 'react';

describe('Banner', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(<Banner>Banner Content</Banner>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
