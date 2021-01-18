import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Badge from './Badge';

describe('<Badge />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Badge>Content</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with no a11y violations', async () => {
    const { container } = render(<Badge>Content</Badge>);

    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders with specific style', () => {
    const { container } = render(<Badge styling="confirmed">Content</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
