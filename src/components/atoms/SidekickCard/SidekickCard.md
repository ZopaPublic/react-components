### Summary

These Action Cards can be used to create urgency around certain events.

They come in three variations.

### Examples

- Triumph

```tsx { "props": { "style": { "backgroundColor": "#141E64", "border": "none" } } }
import { SidekickCard, Text, Heading } from '@zopauk/react-components';

<SidekickCard type="triumph">
  <Heading as="h3">The action has been successfully completed</Heading>
  <Text as="p">Awesome everything is alright</Text>
</SidekickCard>;
```

- Verified

```tsx { "props": { "style": { "backgroundColor": "#141E64", "border": "none" } } }
import { SidekickCard, Text, Heading } from '@zopauk/react-components';

<SidekickCard type="verified">
  <Heading as="h3">Your account has been verfied</Heading>
  <Text as="p">You can start using your account now</Text>
</SidekickCard>;
```

- Alert

```tsx { "props": { "style": { "backgroundColor": "#141E64", "border": "none" } } }
import { SidekickCard, Text, Heading } from '@zopauk/react-components';

<SidekickCard type="alert">
  <Heading as="h3">The action has a problem</Heading>
  <Text as="p">Ops, something went wrong</Text>
</SidekickCard>;
```
