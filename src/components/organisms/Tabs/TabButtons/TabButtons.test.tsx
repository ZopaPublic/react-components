import React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from '../../../organisms/Tabs';

describe('<TabButtons />', () => {
  const tabButtons = [
    { tabId: 'pineapple', title: '🍍 Pineapple' },
    { tabId: 'kiwi', title: '🥝 Kiwi' },
    { tabId: 'watermelon', title: '🍉 Watermelon' },
  ];

  it('renders the buttons on big screens', async () => {
    const { container } = render(
      <Tabs>
        <Tabs.Buttons tabButtons={tabButtons} defaultTab="pineapple" />
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders the buttons on small screens', async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 320 });
    const { container } = render(
      <Tabs>
        <Tabs.Buttons tabButtons={tabButtons} defaultTab="pineapple" />
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });
});
