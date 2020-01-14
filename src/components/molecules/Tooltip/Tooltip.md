### Summary

This is just a wrapper around [`@tippy.js/react`](https://github.com/atomiks/tippy.js-react) with some style constraints applied.

For more information:

- [Props](https://atomiks.github.io/tippyjs/all-props/)
- [Examples](https://atomiks.github.io/tippyjs/)

⚠️ &nbsp; If you want the tooltip target to be a React component, you [need to wrap it with `forwardRef`](https://github.com/atomiks/tippy.js-react#component-children).

⚠️ &nbsp; We don't allow to customise `theme`, `animation` and `flipOnUpdate` to make sure the tooltip UX stays the same.

⚠️ &nbsp; By default you won't be able to pass JSX to the tooltip content. You can change that via `allowHTML={true}` prop.

### Example

```jsx
import { forwardRef } from 'react';
import { Tooltip, Button } from '@zopauk/react-components';

function Example() {
  return (
    <Tooltip content="I prefer 🍕 over 🍰 ...">
      <span>💁🏻‍♂️</span>
    </Tooltip>
  );
}

<Example />;
```
