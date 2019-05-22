import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import MiscLinks from './MiscLinks';

describe('<MiscLinks />', () => {
  it('renders the component', async () => {
    const { container } = render(<MiscLinks />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<MiscLinks />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
