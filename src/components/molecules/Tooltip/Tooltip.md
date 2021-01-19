### Summary

This is just a wrapper around [`@tippyjs/react`](https://github.com/atomiks/tippy.js-react) with some style constraints applied.

For more information:

- [Props](https://atomiks.github.io/tippyjs/all-props/)
- [Examples](https://atomiks.github.io/tippyjs/)

### Requisites 🗯

You should include `<Tooltip.Styles>` in you top-most level component, preferably like this:

```tsx static
import { Tooltip, GlobalStyles } from '@zopauk/react-components';

const App = () => (
  <>
    <Routes />
    <GlobalStyles />
    <Tooltip.Styles />
  </>
);
```

So that styles are applied once and not every time the user navigates to a particular route.

### Tips 💄

- If you want the tooltip target to be a React component, you [need to wrap it with `forwardRef`](https://github.com/atomiks/tippyjs-react#component-children).
- We don't allow to customise `theme`, `animation` and `flipOnUpdate` to make sure the tooltip UX stays the same.
- By default you won't be able to pass JSX to the tooltip content. You can change that via `allowHTML={true}` prop.

### Example

```tsx
import { forwardRef } from 'react';
import { Tooltip, Button } from '@zopauk/react-components';

function Example() {
  return (
    <>
      <Tooltip.Styles />
      <Tooltip content="I prefer 🍕 over 🍰 ...">
        <span>💁🏻‍♂️</span>
      </Tooltip>
    </>
  );
}

<Example />;
```
