import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import Notification from './Notification';
import React from 'react';

describe('Alert', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(<Notification>Alert Content</Notification>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
