### Summary

`<CheckboxGroupField />` is a convenient wrapper that renders group of `<CheckboxField>`s:

⚠️ &nbsp;Note that the `name` for each item has to be unique as it determines the `id`
and `htmlFor` prop fof each checkbox field.

### Examples

- Uncontrolled

```jsx
import { CheckboxGroupField } from '@zopauk/react-components';

<CheckboxGroupField
  items={[
    { name: 'one', label: 'label one' },
    { name: 'two', label: 'label two' },
  ]}
  onChange={values => console.log(values)}
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
  onChange={values => console.log(values)}
  label="Checkbox group field label"
/>;
```

- Controlled

```js
import { useState } from 'react';
import { CheckboxGroupField } from '@zopauk/react-components';

const ControlledCheckboxGroupField = () => {
  const [values, setValues] = useState({ five: true, six: false });
  return (
    <CheckboxGroupField
      items={[
        { name: 'five', label: 'label five' },
        { name: 'six', label: 'label six' },
      ]}
      values={values}
      onChange={setValues}
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
    { name: 'eight', label: 'label eight', defaultChecked: true },
  ]}
  onChange={values => console.log(values)}
  label="Checkbox group field label"
  disabled
/>;
```
