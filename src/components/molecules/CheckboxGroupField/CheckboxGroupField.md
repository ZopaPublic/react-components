### Summary

`<CheckboxGroupField />` is a convenient wrapper that renders group of `<CheckboxField>`s:

⚠️ &nbsp;Note that the `name` for each item has to be unique as it determines the `id`
and `htmlFor` prop for each checkbox field.

### Examples

- Uncontrolled

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  items={[
    { name: 'one', label: 'label one' },
    { name: 'two', label: 'label two' },
  ]}
  onChange={(value) => console.log(value)}
  label="Checkbox group field label"
/>;
```

- Uncontrolled with one checkbox checked by default

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  items={[
    { name: 'three', label: 'label three' },
    { name: 'four', label: 'label four', defaultChecked: true },
  ]}
  onChange={(value) => console.log(value)}
  label="Checkbox group field label"
/>;
```

- Uncontrolled with hidden control

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  items={[
    { name: 'three', label: 'label three' },
    { name: 'four', label: 'label four', defaultChecked: true },
  ]}
  onChange={(value) => console.log(value)}
  label="Checkbox group field label"
  hideControl
/>;
```

- Controlled

```js
import { useState } from 'react';
import { CheckboxGroupField } from '@zopauk/react-components';

const ControlledCheckboxGroupField = () => {
  const [value, setValue] = useState({ five: true, six: false });
  return (
    <CheckboxGroupField
      items={[
        { name: 'five', label: 'label five' },
        { name: 'six', label: 'label six' },
      ]}
      value={value}
      onChange={setValue}
      label="Checkbox group field label"
    />
  );
};

<ControlledCheckboxGroupField />;
```

- Disabled

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  items={[
    { name: 'seven', label: 'label seven' },
    { name: 'eight', label: 'label eight' },
  ]}
  onChange={(value) => console.log(value)}
  label="Checkbox group field label"
  disabled
/>;
```

- Disabled and valid

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  items={[
    { name: 'eight', label: 'label eight' },
    { name: 'nine', label: 'label nine', defaultChecked: true },
  ]}
  onChange={(value) => console.log(value)}
  label="Checkbox group field label"
  isValid={true}
  disabled
/>;
```

- With error

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  items={[
    { name: 'ten', label: 'label ten' },
    { name: 'eleven', label: 'label eleven' },
  ]}
  onChange={(value) => console.log(value)}
  label="Checkbox group field label"
  errorMessage="You have to check at least one"
/>;
```

- Responsive

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  flexColProps={{
    xs: 12,
    m: 6,
    xl: 3,
  }}
  items={[
    { name: 'twelve', label: 'label twelve' },
    { name: 'thirteen', label: 'label thirteen' },
    { name: 'fourteen', label: 'label fourteen' },
    { name: 'fifteen', label: 'label fifteen' },
  ]}
  onChange={(value) => console.log(value)}
  label="Checkbox group field label"
/>;
```
