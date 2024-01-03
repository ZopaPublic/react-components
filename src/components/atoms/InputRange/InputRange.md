### Summary

Use `<InputRange />` to render a **controlled** native HTML `<input type="range" />`.
<InputRange /> should have an id and a corresponding label connected to it via id.
Make sure you add role="status" for the element which contains the value of the input range for accessibility purposes.

### Examples

Store value of `<InputRange />`:

```tsx
import { Fragment, useState } from 'react';
import { InputRange, Text } from '@zopauk/react-components';

const ControlledInputRange = () => {
  const [value, setValue] = useState(75);

  return (
    <Fragment>
      <label mb for="123" role="status">
        Value: {value}
      </label>
      <InputRange value={value} onChange={setValue} id="123" />
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
      <label mb for="124" role="status">
        Value: {value}
      </label>
      <InputRange value={value} min={100} max={200} onChange={setValue} id="124" />
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
      <label mb for="125" role="status">
        Value: {value}
      </label>
      <InputRange value={value} step={10} onChange={setValue} id="125" />
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
      <label mb for="126" role="status">
        Value: {value}
      </label>
      <InputRange value={value} min={100} max={500} step={50} onChange={setValue} id="126" />
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
      <label mb for="127" role="status">
        Value: {value}
      </label>
      <InputRange value={value} controls onChange={setValue} id="127" />
    </Fragment>
  );
};

<ControlledInputRange />;
```
