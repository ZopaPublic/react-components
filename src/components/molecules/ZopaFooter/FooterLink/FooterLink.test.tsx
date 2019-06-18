import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import FooterLink from './FooterLink';

describe('<FooterLink />', () => {
  it('renders the component with default props', async () => {
    const { container } = render(<FooterLink />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with a small size', async () => {
    const { container } = render(<FooterLink size="small" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<FooterLink />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
