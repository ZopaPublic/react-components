### Summary

`<Alert />` provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

### Example

- Info

```tsx
import { Alert, Link } from '@zopauk/react-components';

<Alert>
  You can save with us if you have tax residency in the UK only. <Link>Find out more</Link>
</Alert>;
```

- Alert

```tsx
import { Alert } from '@zopauk/react-components';

<Alert severity="alert">Something went wrong. Try again later.</Alert>;
```

- Warning

```tsx
import { Alert, Link } from '@zopauk/react-components';

<Alert severity="warning">
  We've reacted quickly to the current economic uncertainty, implementing a temporary change to our lending strategy.{' '}
  <Link>Find out more</Link>
</Alert>;
```

- Success

```tsx
import { Alert } from '@zopauk/react-components';

<Alert severity="success">Congratulations!</Alert>;
```
