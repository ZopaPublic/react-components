import axe from '../../../../axe-helper';
import { render } from '@testing-library/react';
import Notification from './Notification';
import React from 'react';

describe('Notification', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(<Notification>Notification Content</Notification>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
