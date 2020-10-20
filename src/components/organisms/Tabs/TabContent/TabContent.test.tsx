import React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from '../../../organisms/Tabs';

describe('<TabContent />', () => {
  const tabButtons = [
    { tabId: 'pineapple', title: '🍍 Pineapple' },
    { tabId: 'kiwi', title: '🥝 Kiwi' },
    { tabId: 'watermelon', title: '🍉 Watermelon' },
  ];

  it('renders the content of the active tab', () => {
    const { getByText } = render(
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
  });
});
