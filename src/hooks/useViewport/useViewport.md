### Summary

`useViewport()` can be used to programmatically read the viewport size on a React component.

It can be useful for conditional rendering, which is usually preferred over hiding with CSS given it reduces the VDOM tree size.

### Tips

By default this hook will attach an event listener to `window.resize` that will read the current viewport dimensions and let you know when those change.

**In case you're using this hook in more than one component for a given page** ... please use the provided `ViewportProvider` to prevent overload `window` with `resize` listeners 🚨

### Examples

• Reading the dimensions by itself:

```js
import React from 'react';
import { useViewport, Text, ViewportContext, breakpoints } from '@zopauk/react-components';

function Example() {
  const { width } = useViewport();

  return <Text size="lead">{width > breakpoints.tablet ? '🍅 Tomato' : '🥔 Potato'}</Text>;
}

<Example />;
```

• Reading the dimensions from `ViewportProvider`:

```js
import React from 'react';
import { useViewport, Text, ViewportProvider, breakpoints } from '@zopauk/react-components';

function Example() {
  const { width } = useViewport();

  return <Text size="lead">{width > breakpoints.tablet ? '🍅 Tomato' : '🥔 Potato'}</Text>;
}

<ViewportProvider>
  <Example />
</ViewportProvider>;
```
