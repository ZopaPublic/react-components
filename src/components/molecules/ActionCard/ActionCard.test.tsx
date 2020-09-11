import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import ActionCard from './ActionCard';
import React from 'react';

describe('ActionCard', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(
      <ActionCard id="test-card" handleClick={() => console.log('test')}>
        Action Card Content
      </ActionCard>,
    );
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
