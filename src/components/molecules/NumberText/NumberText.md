### Summary

Display a numerical value with a title. The component will auto format the value and options can be modified using [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

### Examples

Default:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} />;
```

Large/Bottom:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="I would like to borrow" value={100000} numberPosition="bottom" numberFontSize="large" />;
```

Small/Bottom:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} numberPosition="bottom" numberFontSize="small" />;
```

Lead/Right:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} numberPosition="right" numberFontSize="lead" />;
```

Small/Left:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} numberPosition="left" numberFontSize="small" />;
```

left align / semiBold:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText
  title="Overall Balance"
  value={100000}
  formatterOptions={{
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }}
  align="left"
  semiBold
/>;
```

With formatter options:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText
  title="Overall Balance"
  value={100000}
  formatterOptions={{
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }}
  className="mb-6 m:mb-7"
/>;
```

With fallback options:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Core rate" fallback={'N/A'} className="mb-6 m:mb-7" />;
```
