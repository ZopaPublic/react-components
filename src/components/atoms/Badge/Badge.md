Use the `<Badge />` component to label elements in the user interface.

There's four different styles available:

```js
import { Fragment } from 'react';
import { Badge, SizedContainer } from '@zopauk/react-components';

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
    <Badge styling="invalid" mb>
      Invalid
    </Badge>
  </div>
</Fragment>;
```

For sizing, you can supply the same `"size"` prop as for [`<Text />`](#/Components?id=text)

```js
import { Fragment } from 'react';
import { css } from 'styled-components';
import { Badge, SizedContainer } from '@zopauk/react-components';

<Fragment>
  <Badge size={3}>Compact</Badge> ... <Badge>Default</Badge> ... <Badge size={1}>Large</Badge>
</Fragment>;
```
