### Summary

There are helpers included in this library which can assist in development.

#### Responsive Media Queries

Exported from this library are three helpers to assist with media queries.

- maxMedia
- minMedia
- maxEqualToMedia

These three exported objects have methods for handling the built in breakpoints:

```tsx static
const breakpoints = {
  desktop: 1280,
  phone: 600,
  tablet: 720,
};
```

##### Examples

Below are some examples of how the media queries work and how you should use them.

**MaxMedia breakboint**

```tsx
import styled from 'styled-components';
import { maxMedia } from '@zopauk/react-components';

const Elem = styled.div`
  display: block;
  color: blue;

  ${maxMedia.tablet`
        color: red;
    `}
`;

<Elem>I am blue on desktop and red on tablet</Elem>;
```

**MinMedia breakboint**

```tsx
import styled from 'styled-components';
import { minMedia, maxEqualToMedia } from '@zopauk/react-components';

const Elem = styled.div`
  display: block;
  color: blue;

  ${minMedia.phone`
        color: red;
    `}
`;

<Elem>I am blue on mobile and red on tablet and desktop</Elem>;
```

**MaxEqualToMedia breakboint**

```tsx
import styled from 'styled-components';
import { maxEqualToMedia } from '@zopauk/react-components';

const Elem = styled.div`
  display: block;
  color: blue;

  ${maxEqualToMedia.desktop`
        color: red;
    `}
`;

<Elem>I am red to start with and blue on desktop and higher</Elem>;
```
