import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import SocialLinks from './SocialLinks';

describe('<SocialLinks />', () => {
  it('renders the component', async () => {
    const { container } = render(<SocialLinks />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<SocialLinks />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
