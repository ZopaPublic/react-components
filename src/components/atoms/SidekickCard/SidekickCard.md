### Summary

These Action Cards can be used to create urgency around certain events.

They come in three variations.

### Examples

- Triumph

```jsx { "props": { "style": { "backgroundColor": "#141E64", "border": "none" } } }
import { SidekickCard, Text } from '@zopauk/react-components';

<SidekickCard type="triumph">
  <h2>The action has been successfully completed</h2>
  <Text as="p">Awesome everything is alright</Text>
</SidekickCard>;
```

- Verified

```jsx { "props": { "style": { "backgroundColor": "#141E64", "border": "none" } } }
import { SidekickCard, Text } from '@zopauk/react-components';

<SidekickCard type="verified">
  <h2>Your account has been verfied</h2>
  <Text as="p">You can start using your account now</Text>
</SidekickCard>;
```

- Alert

```jsx { "props": { "style": { "backgroundColor": "#141E64", "border": "none" } } }
import { SidekickCard, Text } from '@zopauk/react-components';

<SidekickCard type="alert">
  <h2>The action has a problem</h2>
  <Text as="p">Ops, something went wrong</Text>
</SidekickCard>;
```
