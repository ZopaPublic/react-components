This component is a wrapper around the svg code for Arrow's icon.

Allowed directions are: `down` | `up` | `left` | `right` | `number` | `string`

```jsx
import { Fragment } from 'react';
import { Arrow as ArrowIcon } from '@zopauk/react-components';

<Fragment>
  <ArrowIcon color="blue" direction="down" />
  <ArrowIcon color="blue" direction="up" />
  <ArrowIcon color="blue" direction="left" />
  <ArrowIcon color="blue" direction="right" />
  <ArrowIcon color="blue" direction={45} />
  <ArrowIcon color="blue" direction="225" />
</Fragment>;
```
