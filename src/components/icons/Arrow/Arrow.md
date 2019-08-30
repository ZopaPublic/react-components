### Summary

Use it to render an arrow icon. You can specify the direction of the arrow through the `direction` prop.

### Example

```jsx
import { Fragment } from 'react';
import { ArrowIcon } from '@zopauk/react-components';

<Fragment>
  <ArrowIcon color="blue" direction="down" />
  <ArrowIcon color="blue" direction="up" />
  <ArrowIcon color="blue" direction="left" />
  <ArrowIcon color="blue" direction="right" />
  <ArrowIcon color="blue" direction={45} />
  <ArrowIcon color="blue" direction="225" />
</Fragment>;
```
