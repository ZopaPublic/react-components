### Summary

Use it to render Zopa's logo as an SVG.

### Examples

- By default grows as wide as its container allows to:

```tsx
import { Logo, SizedContainer } from '@zopauk/react-components';

<SizedContainer size="short">
  <Logo />
</SizedContainer>;
```

- With custom size:

```tsx
import { Logo } from '@zopauk/react-components';

<Logo width="100px" />;
```

- Negative version:

```tsx { "props": { "style": { "backgroundColor": "black", "border": "none" } } }
import { Logo } from '@zopauk/react-components';

<Logo width="100px" negative />;
```
