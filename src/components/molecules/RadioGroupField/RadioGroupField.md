### Summary

`<RadioFieldGroup />` is a convenient wrapper that renders group of `<RadioField>`

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
  onChange={(value) => console.log(value)}
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
  onChange={(value) => console.log(value)}
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
    { value: 'eight', label: 'label eight' },
  ]}
  onChange={(value) => console.log(value)}
  label="Radio group field label"
  disabled
/>;
```

- Disabled and valid

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  items={[
    { value: 'eight', label: 'label eight' },
    { value: 'nine', label: 'label nine', defaultChecked: true },
  ]}
  onChange={(value) => console.log(value)}
  label="Radio group field label"
  isValid={true}
  disabled
/>;
```

- With error

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  items={[
    { value: 'ten', label: 'label ten' },
    { value: 'eleven', label: 'label eleven' },
  ]}
  onChange={(value) => console.log(value)}
  label="Radio group field label"
  errorMessage="You have to pick one"
/>;
```

- With loader (when selected)

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  items={[
    { value: 'twelve', label: 'label twelve' },
    {
      value: 'thirteen',
      label:
        'Zopa decides the interest rate for loans and sets up the loan contract with the borrower before transferring the rights to the loan over to you.',
    },
  ]}
  onChange={(value) => console.log(value)}
  label="Radio group field label"
  showLoader={true}
/>;
```

- Responsive

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  flexColProps={{
    xs: 12,
    m: 6,
    xl: 3,
  }}
  items={[
    { value: 'fourteen', label: 'label fourteen' },
    { value: 'fifteen', label: 'label fifteen' },
    { value: 'sixteen', label: 'label sixteen' },
    { value: 'seventeen', label: 'label seventeen' },
  ]}
  onChange={(value) => console.log(value)}
  label="Radio group field label"
/>;
```
