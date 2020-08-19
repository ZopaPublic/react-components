# Summary

`<Notification />` provides contextual inline feedback messages inline. Visually this differs from the Banner component by having rounded corners.

## Example

- Default

```tsx
import { Notification, Link } from '@zopauk/react-components';

<Notification>
  You can save with us if you have tax residency in the UK only. <Link>Find out more</Link>
</Notification>;
```

- Brand

```tsx
import { Notification, Link } from '@zopauk/react-components';

<Notification severity="brand">Hello there! General Kenobi</Notification>;
```

- Alert

```tsx
import { Notification } from '@zopauk/react-components';

<Notification severity="alert">Something went wrong. Try again later.</Notification>;
```

- Warning

```tsx
import { Notification, Link } from '@zopauk/react-components';

<Notification severity="warning">
  We've reacted quickly to the current economic uncertainty, implementing a temporary change to our lending strategy.{' '}
  <Link>Find out more</Link>
</Notification>;
```

- Success

```tsx
import { Notification } from '@zopauk/react-components';

<Notification severity="success">Congratulations!</Notification>;
```

- Inline

```tsx
import { Notification } from '@zopauk/react-components';

<Notification inline>This is an inline notification</Notification>;
```

- With a cross icon

```tsx
import { Notification } from '@zopauk/react-components';

<Notification severity="warning" onRequestClose={() => alert('close!')}>
  This is an inline notification
</Notification>;
```
