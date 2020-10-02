### Summary

`<Tabs />` doesn't render anything: it's just a namespace for e `<Tab />` and `<TabContent />`.

### Example

```tsx
import { Tabs } from '@zopauk/react-components';

function Example() {
  return (
    // <Tabs tabs={['🍍 Pinapple', '🥝 Kiwi', '🍉 Watermelon']}>
    <Tabs>
      <Tabs.Tab title="🍍 Pinapple">
        🍍
      </Tabs.Tab>
      <Tabs.Tab  title="🥝 Kiwi">
        🥝
      </Tabs.Tab>
      <Tabs.Tab  title="🍉 Watermelon">
        🍉
      </Tabs.Tab>
    </Tabs>
  );
}

<Example />;
```
