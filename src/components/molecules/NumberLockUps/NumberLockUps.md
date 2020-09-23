### Summary

Display a numerical value with a title

### Examples

Default:

```tsx
import { NumberLockUps } from '@zopauk/react-components';

<NumberLockUps title="Overall Balance" value={100000} />;
```

Small/Bottom:

```tsx
import { NumberLockUps } from '@zopauk/react-components';

<NumberLockUps title="Overall Balance" value={100000} numberPosition="bottom" numberFontSize="small" />;
```

Main/Right:

```tsx
import { NumberLockUps } from '@zopauk/react-components';

<NumberLockUps title="Overall Balance" value={100000} numberPosition="right" />;
```

Small/Left:

```tsx
import { NumberLockUps } from '@zopauk/react-components';

<NumberLockUps title="Overall Balance" value={100000} numberPosition="left" numberFontSize="small" />;
```

With formatter options:

```tsx
import { NumberLockUps } from '@zopauk/react-components';

<NumberLockUps
  title="Overall Balance"
  value={100000}
  formatterOptions={{
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }}
/>;
```
