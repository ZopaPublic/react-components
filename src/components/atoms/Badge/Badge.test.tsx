import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
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

  it('renders with specific size', () => {
    const { container } = render(<Badge size="l">Content</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
