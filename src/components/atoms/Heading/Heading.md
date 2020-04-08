### Summary

Whenever you want to render a heading on any UI at Zopa, use the `<Heading />` component.

❗❗️ This library assumes **Open Sans** is available for the typography to render correctly.  
❗❗️ Make sure you make it available in your application HTML skeleton:

```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

### Examples

- Variations

```tsx
import styled from 'styled-components';
import { Fragment } from 'react';
import { colors, Heading, Text } from '@zopauk/react-components';

<Fragment>
  <Heading as="h1" size="display">
    Display Heading
  </Heading>
  <Text color={colors.alert}>❗️ Only to be used for marketing purposes.</Text>
  <hr style={{ margin: '30px 0' }} />
  <Heading as="h1">Heading level 1</Heading>
  <Heading as="h2">Heading level 2</Heading>
  <Heading as="h3">Heading level 3</Heading>
  <Heading as="h4">Heading level 4</Heading>
  <Heading as="h5">Heading level 5</Heading>
  <Heading as="h6" mb={false}>
    Heading level 6
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
  <Heading as="h4" color={colors.white}>
    White
  </Heading>
  <Heading as="h4" color={colors.grey}>
    Near Dark
  </Heading>
  <Heading as="h4" color={colors.greyDarkest} mb={false}>
    Dark
  </Heading>
</Fragment>;
```

- Alignment

```tsx
import { Fragment } from 'react';
import { Heading } from '@zopauk/react-components';

<Fragment>
  <div style={{ textAlign: 'right' }}>
    <Heading as="h4" mb>
      Inherits from his parent by default
    </Heading>
  </div>
  <Heading as="h4" align="left">
    Left aligned
  </Heading>
  <Heading as="h4" align="center">
    Center
  </Heading>
  <Heading as="h4" align="right" mb={false}>
    Right aligned
  </Heading>
</Fragment>;
```
