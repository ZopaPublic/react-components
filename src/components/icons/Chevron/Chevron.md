### Summary

Use it to render a chevron icon. You can specify the direction of the chevron through the `direction` prop.

### Example

```tsx
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
