### Summary

`<CheckboxField />` is a convenience wrapper around HTML `<input type="checkbox" />` and two **atoms**:

- [`<InputLabel />`](/#/Components/Atoms/InputLabel)
- [`<ErrorMessage />`](/#/Components/Atoms/ErrorMessage)

⚠️ &nbsp;Note that a `name` prop **must be provided** to automatically set:

- `htmlFor` prop in `<InputLabel />`
- `data-automation` prop in `<ErrorMessage />`
- `id` prop in `<input type="checkbox" />` for accessibility and automation purposes

### Examples

- Default

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you love jazz?" name="check1" />;
```

- Checked state

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you love rap?" name="text2" defaultChecked={true} />;
```

- With an error

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you agree?" errorMessage="Oops! You forgot to check this" name="text6" />;
```
