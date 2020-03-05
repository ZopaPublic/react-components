### Summary

`useViewport()` can be used to programatically read the viewport size on a React compnent.

It can be useful for conditional rendering, which is usually prefered over hiding with CSS given it reduces the VDOM tree size.

### Example

```js
import React from 'react';
import { useViewport, Text, breakpoints } from '@zopauk/react-components';

function Example() {
  const { width } = useViewport();

  return <Text size="lead">{width > breakpoints.tablet ? '🍅 Tomato!' : '🥔 Potato!'}</Text>;
}

<Example />;
```
