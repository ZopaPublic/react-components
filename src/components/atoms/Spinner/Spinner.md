### Summary

Use `<Spinner />` whenever we need to notify the user that something is loading.

### Examples

Default:

```ts
import { Spinner } from '@zopauk/react-components';

<Spinner />;
```

Small:

```ts
import { Spinner } from '@zopauk/react-components';

<Spinner size="small" />;
```

Negative:

```ts { "props": { "style": { "backgroundColor": "black", "border": "none" } } }
import { Spinner } from '@zopauk/react-components';

<Spinner styling="negative" />;
```

ThreeDotsSpinner:

```ts
import { ThreeDotsSpinner } from '@zopauk/react-components';

<ThreeDotsSpinner />;
```
