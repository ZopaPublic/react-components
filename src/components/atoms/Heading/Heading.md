Sizes:

```jsx
import { Fragment } from 'react';
import { Heading } from '@zopauk/react-components';

<Fragment>
  <Heading as="h1">Heading level 1</Heading>
  <Heading as="h2">Heading level 2</Heading>
  <Heading as="h3">Heading level 3</Heading>
  <Heading as="h4">Heading level 4</Heading>
</Fragment>;
```

Alternative size:

```jsx
import { Fragment } from 'react';
import { Heading } from '@zopauk/react-components';

<Fragment>
  <Heading as="h4" size={2}>
    I'm an level 4 heading with large size
  </Heading>
  <Heading as="h1" size={4}>
    I'm an level 1 heading with small size
  </Heading>
</Fragment>;
```
