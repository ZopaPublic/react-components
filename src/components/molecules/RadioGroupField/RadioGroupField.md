### Summary

`<RadioFieldGroup />` is a convenient wrapper that renders group of `<RadioField>`s:

⚠️ &nbsp;Note that the `value` for each item has to be unique as it determines the `id`
and `htmlFor` prop fof each radio field.

### Examples

- Uncontrolled

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  items={[
    { value: 'one', label: 'label one' },
    { value: 'two', label: 'label two' },
  ]}
  onChange={value => console.log(value)}
  label="Radio group field label"
/>;
```

- Uncontrolled with one radio checked by default

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  items={[
    { value: 'three', label: 'label three' },
    { value: 'four', label: 'label four', defaultChecked: true },
  ]}
  onChange={value => console.log(value)}
  label="Radio group field label"
/>;
```

- Controlled

```js
import { useState } from 'react';
import { RadioGroupField } from '@zopauk/react-components';

const ControlledRadioGroupField = () => {
  const [value, setValue] = useState('five');
  return (
    <RadioGroupField
      items={[
        { value: 'five', label: 'label five' },
        { value: 'six', label: 'label six' },
      ]}
      value={value}
      onChange={setValue}
      label="Radio group field label"
    />
  );
};

<ControlledRadioGroupField />;
```

- Disabled

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  items={[
    { value: 'seven', label: 'label seven' },
    { value: 'eight', label: 'label eight', defaultChecked: true },
  ]}
  onChange={value => console.log(value)}
  label="Radio group field label"
  disabled
/>;
```
