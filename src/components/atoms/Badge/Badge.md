### Summary

Use the `<Badge />` component to label elements in the user interface.

There's four variations available and accepts the same sizes as [`<Text />`](#/Components/Atoms/Text).

### Examples

- Variations

```tsx
import { Fragment } from 'react';
import { Badge } from '@zopauk/react-components';

<Fragment>
  <div>
    <Badge className="mb-6">Default</Badge>
  </div>
  <div>
    <Badge styling="brand" className="mb-6">
      Brand
    </Badge>
  </div>
  <div>
    <Badge styling="waiting" className="mb-6">
      Pending
    </Badge>
  </div>
  <div>
    <Badge styling="confirmed" className="mb-6">
      Approved
    </Badge>
  </div>
  <div>
    <Badge styling="invalid">Invalid</Badge>
  </div>
</Fragment>;
```
