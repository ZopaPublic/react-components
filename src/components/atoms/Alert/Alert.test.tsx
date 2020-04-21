import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

describe('Alert', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(<Alert>Alert Content</Alert>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it.each`
    severity
    ${'info'}
    ${'alert'}
    ${'warning'}
    ${'success'}
  `('renders with specific severity: $severity', ({ severity }) => {
    const { container } = render(<Alert severity={severity}>Alert Content</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
