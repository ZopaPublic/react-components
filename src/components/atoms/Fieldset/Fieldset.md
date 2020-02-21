### Summary

Use `<Fieldset />` to group checkboxes, radio buttons, or other related form items. `<Fieldset />` is a small wrapper that resets browser defaults.
It should be used along with `<Legend />` element for accessibility reasons.

### Examples

- Grouping checkmarks

```js
import { Fieldset, CheckboxField } from '@zopauk/react-components';

<Fieldset>
  <legend>Which music do you like?</legend>
  <CheckboxField label="jazz" name="jazz" />
  <CheckboxField label="rock" name="rock" />
</Fieldset>;
```
