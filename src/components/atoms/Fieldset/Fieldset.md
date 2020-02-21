### Summary

Use `<Fieldset />` to group checkboxes, radio buttons, or other related form items. `<Fieldset />` is a small wrapper around `<fieldset />` that resets browser defaults.
It should be used along with `<Legend />` element for accessibility reasons.

### Examples

- Grouping checkmarks

```js
import { Fieldset, CheckboxField, Legend, Text } from '@zopauk/react-components';

<Fieldset>
  <Legend>
    <Text weight="semibold">Which music do you like?</Text>
  </Legend>
  <CheckboxField label="jazz" name="jazz" />
  <CheckboxField label="rock" name="rock" />
</Fieldset>;
```
