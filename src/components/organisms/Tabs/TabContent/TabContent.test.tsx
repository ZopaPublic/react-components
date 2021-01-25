import React from 'react';
import { render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import { Tabs } from '../../../organisms/Tabs';

describe('<TabContent />', () => {
  const tabButtons = [
    { tabId: 'pineapple', title: '🍍 Pineapple' },
    { tabId: 'kiwi', title: '🥝 Kiwi' },
    { tabId: 'watermelon', title: '🍉 Watermelon', afterOnClick: jest.fn() },
  ];

  it('renders the content of the active tab', async () => {
    const { getByText, container } = render(
      <Tabs>
        <Tabs.Buttons tabButtons={tabButtons} defaultTab="kiwi" />
        <Tabs.Content contentFor="pineapple" className="test-classname">
          🍍
        </Tabs.Content>
        <Tabs.Content contentFor="kiwi" className="test-classname">
          🥝
        </Tabs.Content>
        <Tabs.Content contentFor="watermelon" className="test-classname">
          🍉
        </Tabs.Content>
      </Tabs>,
    );

    expect(getByText('🥝').getAttribute('aria-hidden')).toBe('false');
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
