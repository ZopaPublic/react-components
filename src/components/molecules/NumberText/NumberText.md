### Summary

Display a numerical value with a title. The component will auto format the value and options can be modified using [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

### Examples

Default:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} />;
```

Small/Bottom:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} numberPosition="bottom" numberFontSize="small" />;
```

Main/Right:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} numberPosition="right" />;
```

Small/Left:

```tsx
import { NumberText } from '@zopauk/react-components';

<NumberText title="Overall Balance" value={100000} numberPosition="left" numberFontSize="small" />;
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
