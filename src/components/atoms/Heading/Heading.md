### Summary

Whenever you want to render a heading on any UI at Zopa, use the `<Heading />` component.

Apply margin/padding by [adding spacing](/#/Content?id=spacing).

### Examples

- Variations

```tsx
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
  <Heading as="h6">Heading level 6</Heading>
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

```tsx { "props": { "style": { "background": "linear-gradient(180deg, rgba(0,217,197,1) 0%, rgba(255,255,255,1) 100%)", "border": "none" } } }
import { Fragment } from 'react';
import { Heading, colors } from '@zopauk/react-components';

<Fragment>
  <Heading as="h4" color={colors.white}>
    White
  </Heading>
  <Heading as="h4" color={colors.grey}>
    Near Dark
  </Heading>
  <Heading as="h4" color={colors.greyDarkest} className="mb-0">
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
    <Heading as="h4" className="mb-7">
      Inherits from his parent by default
    </Heading>
  </div>
  <Heading as="h4" align="left">
    Left aligned
  </Heading>
  <Heading as="h4" align="center">
    Center
  </Heading>
  <Heading as="h4" align="right" className="mb-0">
    Right aligned
  </Heading>
</Fragment>;
```

- Using forwardedAs:
  If Heading is styled it should use the 'forwardedAs' prop in place of as.
  If Heading is not styled the 'as' prop should be used.

```jsx
import { Fragment } from 'react';
import styled from 'styled-components';
import { Heading } from '@zopauk/react-components';

const StyledHeading = styled(Heading)``;

<Fragment>
  <Heading as="h4">Heading uses as prop</Heading>
  <StyledHeading forwardedAs="h4">Styled heading uses forwardedAs prop</StyledHeading>
</Fragment>;
```
