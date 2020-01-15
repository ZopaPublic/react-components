### Summary

Use the `<Badge />` component to label elements in the user interface.

### Examples

- Variations

```js
import { Fragment } from 'react';
import { Badge } from '@zopauk/react-components';

<Fragment>
  <Badge mb>Default</Badge>
  <Badge styling="waiting" mb>
    Pending
  </Badge>
  <Badge styling="confirmed" mb>
    Approved
  </Badge>
  <Badge styling="invalid">Invalid</Badge>
</Fragment>;
```
