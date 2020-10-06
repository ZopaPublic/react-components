import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import Tabs from './Tabs';

describe('<Tabs />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(
      <Tabs>
        <span>🍍</span>
      </Tabs>,
    );
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
