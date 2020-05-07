### Summary

Use `<InputRange />` to render a **controlled** native HTML `<input type="range" />`.

### Examples

Store value of `<InputRange />`:

```tsx
import { Fragment, useState } from 'react';
import { InputRange, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(75);

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} onChange={setValue} />
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

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} min={100} max={200} onChange={setValue} />
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

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} step={10} onChange={setValue} />
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

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} min={100} max={500} step={50} onChange={setValue} />
    </Fragment>
  );
};

<ControlledInputRange />;
```

Store value of `<InputRange />` with controls:

```tsx
import { Fragment, useState } from 'react';
import { InputRange, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(75);

  return (
    <Fragment>
      <Text mb>Value: {value}</Text>
      <InputRange value={value} controls onChange={setValue} />
    </Fragment>
  );
};

<ControlledInputRange />;
```
