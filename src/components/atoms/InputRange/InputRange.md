### Summary

Use `<InputRange />` to render a native HTML `<input type="range" />`.

### Examples

With default props:

```tsx
import { InputRange } from '@zopauk/react-components';

<InputRange />;
```

With default value:

```tsx
import { InputRange } from '@zopauk/react-components';

<InputRange defaultValue={75} />;
```

With min and max:

```tsx
import { InputRange } from '@zopauk/react-components';

<InputRange min={100} max={200} />;
```

With step:

```tsx
import { InputRange } from '@zopauk/react-components';

<InputRange step={10} />;
```

With default value, min, max and step:

```tsx
import { InputRange } from '@zopauk/react-components';

<InputRange defaultValue={150} min={100} max={500} step={50} />;
```

### Controlled Examples

Store value of `<InputRange />`:

```tsx
import { Fragment, useState } from 'react';
import { InputRange, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(75);
  const onChangeHandler = event => setValue(Number(event.target.value));

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} onChange={onChangeHandler} />
    </Fragment>
  );
};

<ControlledInputRange />;
```

Store value of `<InputRange />` with min and max:

```tsx
import { Fragment, useState } from 'react';
import { InputRange, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(150);
  const onChangeHandler = event => setValue(Number(event.target.value));

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} min={100} max={200} onChange={onChangeHandler} />
    </Fragment>
  );
};

<ControlledInputRange />;
```

Store value of `<InputRange />` with step:

```tsx
import { Fragment, useState } from 'react';
import { InputRange, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(50);
  const onChangeHandler = event => setValue(Number(event.target.value));

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} step={10} onChange={onChangeHandler} />
    </Fragment>
  );
};

<ControlledInputRange />;
```

Store value of `<InputRange />` with min, max and step:

```tsx
import { Fragment, useState } from 'react';
import { InputRange, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(150);
  const onChangeHandler = event => setValue(Number(event.target.value));

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} min={100} max={500} step={50} onChange={onChangeHandler} />
    </Fragment>
  );
};

<ControlledInputRange />;
```
