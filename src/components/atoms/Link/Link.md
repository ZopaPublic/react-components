### Summary

Use `<Link />` to create hyperlinks to other web pages, files, locations within the same page, email addresses, or any other URL.

⚠️ &nbsp; Links are never headings

### Examples

- Normal link

```tsx
import { Text, Link } from '@zopauk/react-components';

<Text as="p">
  Some text with
  <Link href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```

- Button link

```tsx
import { Text, Link } from '@zopauk/react-components';

<Text as="p">
  Some text with
  <Link as="button" href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```

- Negative link

```tsx { "props": { "style": { "backgroundColor": "#00B9A7", "border": "none" } } }
import { Text, Link, colors } from '@zopauk/react-components';

<Text as="p" color={colors.greyDarkest}>
  Some text with
  <Link href="http://duckduckgo.com" onClick={() => alert('Link clicked!')} negative>
    a link
  </Link>
</Text>;
```

- With `target="_blank"` ( _notice a square icon appeared_ )

```tsx
import { Text, Link } from '@zopauk/react-components';

<Text as="p">
  Some text with
  <Link target="_blank" href="http://duckduckgo.com" onClick={() => alert('Link clicked!')}>
    a link
  </Link>
</Text>;
```

- Link as a custom component

```tsx
import React from 'react';
import styled from 'styled-components';
import { linkStyle } from '@zopauk/react-components';

// could be a gatsby or react-router-dom <Link />
const SomeLibraryLink = ({ href, ...rest }) => <a href={href} {...rest} />;

const CustomLink = styled(SomeLibraryLink)`
  ${linkStyle}
`;

<CustomLink href="https://www.zopa.com">Custom link</CustomLink>;
```
