### Summary

`<Tabs />` is a wrapper that is supposed to be used with `<Tabs.Button />` and `<Tabs.Content />`. It provides its children with the `<TabsContext />`.

### Example

```tsx
import { Tabs } from '@zopauk/react-components';

function TabsExample() {
  return (
    <Tabs>
      <Tabs.Button tabId="pineapple" title="🍍 Pineapple" isDefaultTab />
      <Tabs.Button tabId="kiwi" title="🥝 Kiwi" />
      <Tabs.Button tabId="watermelon" title="🍉 Watermelon" />
      <Tabs.Content contentFor="pineapple">🍍</Tabs.Content>
      <Tabs.Content contentFor="kiwi">🥝</Tabs.Content>
      <Tabs.Content contentFor="watermelon">🍉</Tabs.Content>
    </Tabs>
  );
}

<TabsExample />;
```
