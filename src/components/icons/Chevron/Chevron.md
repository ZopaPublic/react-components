This component is a wrapper around the svg code for Chevron's icon.

Allowed directions are 'down' | 'up' | 'left' | 'right' | number | string

```jsx
import { Fragment } from 'react';
import { ChevronIcon } from '@zopauk/react-components';

<Fragment>
  <ChevronIcon color="blue" direction="down" />
  <ChevronIcon color="blue" direction="up" />
  <ChevronIcon color="blue" direction="left" />
  <ChevronIcon color="blue" direction="right" />
  <ChevronIcon color="blue" direction={45} />
  <ChevronIcon color="blue" direction="225" />
</Fragment>;
```
