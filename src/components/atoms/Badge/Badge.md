Use the `<Badge />` component to label elements in the user interface.

There's four different styles available:

```js
import { Fragment } from 'react';
import { Badge } from '@zopauk/react-components';

<Fragment>
  <Badge>Default</Badge>
  <Badge styling="waiting">Pending</Badge>
  <Badge styling="confirmed">Approved</Badge>
  <Badge styling="invalid">Invalid</Badge>
</Fragment>;
```

For sizing, you can supply the same `"size"` prop as for [`<Text />`](#/Components?id=text)

```js
import { Fragment } from 'react';
import { Badge } from '@zopauk/react-components';

<Fragment>
  <Badge size="xs">Compact</Badge>
  <Badge>Default</Badge>
  <Badge size="m">Medium</Badge>
  <Badge size="l">Large</Badge>
</Fragment>;
```
