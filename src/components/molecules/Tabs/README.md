### Summary

`<Tabs />` doesn't render anything: it's just a namespace for e `<Tab />` and `<TabContent />`.

### Example

```tsx
import { Tabs } from '@zopauk/react-components';

function TabsExample() {
  return (
    <Tabs>
      <Tabs.Button tabId="pineapple" title="🍍 Pineapple" />
      <Tabs.Button tabId="kiwi" title="🥝 Kiwi" isDefaultTab />
      <Tabs.Button tabId="watermelon" title="🍉 Watermelon" />
      <Tabs.Content contentFor="pineapple">🍍</Tabs.Content>
      <Tabs.Content contentFor="kiwi">🥝</Tabs.Content>
      <Tabs.Content contentFor="watermelon">🍉</Tabs.Content>
    </Tabs>
  );
}

<TabsExample />;
```
