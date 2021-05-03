import axe from '../../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import TabButton from './TabButton';
import { Tabs } from '../../../organisms/Tabs';

describe('<TabButton />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(
      <Tabs>
        <TabButton tabId="pineapple" title="🍍 Pineapple" />
      </Tabs>,
    );
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
