import React from 'react';
import axe from '../../../../../axe-helper';
import { render } from '@testing-library/react';
import { Tabs } from '../../../organisms/Tabs';

describe('<TabContainer />', () => {
  const tabButtons = [
    { tabId: 'pineapple', title: '🍍 Pineapple' },
    { tabId: 'kiwi', title: '🥝 Kiwi' },
    { tabId: 'watermelon', title: '🍉 Watermelon' },
  ];

  it('renders the component with no a11y violations', async () => {
    const { container } = render(
      <Tabs>
        <Tabs.Buttons tabButtons={tabButtons} defaultTab="pineapple" />
        <Tabs.Content contentFor="pineapple">🍍</Tabs.Content>
        <Tabs.Content contentFor="kiwi">🥝</Tabs.Content>
        <Tabs.Content contentFor="watermelon">🍉</Tabs.Content>
      </Tabs>,
    );
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
