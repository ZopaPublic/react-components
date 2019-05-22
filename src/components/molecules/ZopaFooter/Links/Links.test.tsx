import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Links from './Links';

describe('<Links />', () => {
  it('renders the component', async () => {
    const { container } = render(<Links />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<Links />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
