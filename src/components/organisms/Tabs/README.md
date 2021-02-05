### Summary

`<Tabs />` is a wrapper that is supposed to be used with `<Tabs.Buttons />` and `<Tabs.Content />`. It provides its children with the `<TabsContext />`.

### Example

```tsx
import { Tabs } from '@zopauk/react-components';

function TabsExample() {
  const tabButtons = [
    { tabId: 'pineapple', title: '🍍 Pineapple' },
    { tabId: 'kiwi', title: '🥝 Kiwi' },
    {
      tabId: 'watermelon',
      title: '🍉 Watermelon',
      afterOnClick: () => console.log('This tab has a function that is called after the default action in onClick'),
    },
  ];
  return (
    <Tabs>
      <Tabs.Buttons tabButtons={tabButtons} defaultTab="pineapple" />
      <Tabs.Content contentFor="pineapple">🍍</Tabs.Content>
      <Tabs.Content contentFor="kiwi">🥝</Tabs.Content>
      <Tabs.Content contentFor="watermelon">🍉</Tabs.Content>
    </Tabs>
  );
}

<TabsExample />;
```
