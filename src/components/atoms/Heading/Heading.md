### Summary

1. Whenever you want to render a heading on any UI at Zopa, use the `<Heading />` component
2. Supply an `as` prop to specify which level to render: "h1" | "h2" | "h3" | "h4"
3. Depending on the rendered tag through `as` the headings will render at bigger or smaller size
4. Its size can be controlled through the `size` prop as well for more granular control
5. Its weight can't be customised
6. It comes with bottom white-space (margin) by default but you can disabled that through the `mb` prop

### Examples

- Variations

```tsx
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

```tsx
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

- Sizing

```jsx
import { Fragment } from 'react';
import { Heading } from '@zopauk/react-components';

<Fragment>
  <Heading as="h2">As a h2 I render at 28px by default</Heading>
  <Heading as="h4">As a h4 I render at 20px by default</Heading>
  <Heading as="h2" size="h4">
    I render with a h2 tag but small
  </Heading>
  <Heading as="span" size="h3">
    I render as a {'<span>'} and big
  </Heading>
</Fragment>;
```

- Colors

```tsx { "props": { "style": { "backgroundColor": "rgb(244, 248, 246)", "border": "none" } } }
import { Fragment } from 'react';
import { Heading, colors } from '@zopauk/react-components';

<Fragment>
  <Heading as="h4" color={colors.neutral.white}>
    White
  </Heading>
  <Heading as="h4" color={colors.neutral.nearDark}>
    Near Dark
  </Heading>
  <Heading as="h4" color={colors.neutral.dark} mb={false}>
    Dark
  </Heading>
</Fragment>;
```
