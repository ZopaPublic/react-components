### Summary

1. Whenever you want to render a heading on any UI at Zopa, use the `<Heading />` component
2. Supply an `as` prop to specify which level to render: "h1" | "h2" | "h3" | "h4"
3. Its size is controlled through the level specified through the `as` prop
4. Its weight can't be customised
5. It comes with bottom white-space (margin) by default but you can disabled that through the `mb` prop

### Examples

- Variations

```jsx
import { Fragment } from 'react';
import { Heading } from '@zopauk/react-components';

<Fragment>
  <Heading as="h1">Heading level 1</Heading>
  <Heading as="h2">Heading level 2</Heading>
  <Heading as="h3">Heading level 3</Heading>
  <Heading as="h4" mb={false}>
    Heading level 4
  </Heading>
</Fragment>;
```

- With white-space

```jsx
import { Fragment } from 'react';
import { Heading } from '@zopauk/react-components';

<Fragment>
  <Heading as="h3">With bottom white-space</Heading>
  <Heading as="h3" mb={false}>
    Without bottom white-space
  </Heading>
  <Heading as="h3" mb={false}>
    Without bottom white-space
  </Heading>
</Fragment>;
```

```jsx { "props": { "style": { "backgroundColor": "#00B9A7", "border": "none" } } }
import { Fragment } from 'react';
import { Heading, colors } from '@zopauk/react-components';

<Fragment>
  <Heading as="h4" color={colors.neutral.white}>
    White
  </Heading>
  <Heading as="h4" color={colors.neutral.dark} mb={false}>
    Dark
  </Heading>
</Fragment>;
```
