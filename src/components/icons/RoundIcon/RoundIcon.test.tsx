import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import RoundIcon from './RoundIcon';

describe('<RoundIcon />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<RoundIcon />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it.each`
    Variant
    ${'confirmed'}
    ${'waiting'}
    ${'invalid'}
  `('renders specific variant: $variant', ({ variant }) => {
    const { container } = render(<RoundIcon variant={variant} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
