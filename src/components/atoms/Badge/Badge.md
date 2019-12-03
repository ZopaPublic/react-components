### Summary

Use the `<Badge />` component to label elements in the user interface.

There's four variations available and accepts the same sizes as [`<Text />`](#/Components/Atoms/Text).

### Examples

- Variations

```js
import { Fragment } from 'react';
import { Badge } from '@zopauk/react-components';

<Fragment>
  <div>
    <Badge mb>Default</Badge>
  </div>
  <div>
    <Badge styling="waiting" mb>
      Pending
    </Badge>
  </div>
  <div>
    <Badge styling="confirmed" mb>
      Approved
    </Badge>
  </div>
  <div>
    <Badge styling="invalid">Invalid</Badge>
  </div>
</Fragment>;
```
