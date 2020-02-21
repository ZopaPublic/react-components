### Summary

Use `<Legend />` to label grouped checkboxes, radio buttons, or other related form items. `<Legend />` is a small wrapper around `<legend />` that resets browser defaults.
It should be used within `<Fieldset />` element for accessibility reasons.

### Examples

- Grouping checkmarks

```js
import { Legend, Fieldset, CheckboxField, Text } from '@zopauk/react-components';

<Fieldset>
  <Legend>
    <Text weight="semibold">Which cuisine do you prefer?</Text>
  </Legend>
  <CheckboxField label="italian" name="italian" />
  <CheckboxField label="polish" name="polish" />
</Fieldset>;
```
