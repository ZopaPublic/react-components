### Summary

`<RadioFieldGroup />` is a convenient wrapper that renders group of `<RadioField>`s:

⚠️ &nbsp;Note that depending whether `value` props is passed it can work as controlled or uncontrolled input

### Examples

- Default

```jsx
import { RadioGroupField } from '@zopauk/react-components';

<RadioGroupField
  items={[
    { value: 'one', label: 'label one' },
    { value: 'two', label: 'label two', defaultChecked: true },
  ]}
  onChange={() => {}}
  label="example"
/>;
```
