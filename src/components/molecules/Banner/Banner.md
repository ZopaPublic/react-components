# Summary

`<Banner />` provides contextual feedback messages for typical user actions with the handful of available and flexible banner messages.

## Example

- Default

```tsx
import { Banner, Link } from '@zopauk/react-components';

<Banner>
  You can save with us if you have tax residency in the UK only. <Link>Find out more</Link>
</Banner>;
```

- Brand

```tsx
import { Banner, Link } from '@zopauk/react-components';

<Banner severity="brand">Hello there! General Kenobi</Banner>;
```

- Alert

```tsx
import { Banner } from '@zopauk/react-components';

<Banner severity="alert">Something went wrong. Try again later.</Banner>;
```

- Warning

```tsx
import { Banner, Link } from '@zopauk/react-components';

<Banner severity="warning">
  We've reacted quickly to the current economic uncertainty, implementing a temporary change to our lending strategy.{' '}
  <Link>Find out more</Link>
</Banner>;
```

- Success

```tsx
import { Banner } from '@zopauk/react-components';

<Banner severity="success">Congratulations!</Banner>;
```

- Inline

```tsx
import { Banner } from '@zopauk/react-components';

<Banner inline>This is an inline banner</Banner>;
```

- With a cross icon

```tsx
import { Banner } from '@zopauk/react-components';

<Banner severity="warning" onRequestClose={() => alert('close!')}>
  This is an inline banner
</Banner>;
```
