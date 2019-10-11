### Summary

`<CheckboxField />` is a convenience wrapper around HTML `<input type="checkbox" />` and two **atoms**:

- [`<Label />`](/#/Components/Atoms/Label)
- [`<ErrorMessage />`](/#/Components/Atoms/ErrorMessage)

⚠️ &nbsp;Note that a `name` prop **must be provided** to automatically set:

- `htmlFor` prop in `<Label />`
- `data-automation` prop in `<ErrorMessage />`
- `id` prop in `<input type="checkbox" />` for accessibility and automation purposes

### Examples

- Default

```jsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField inputProps={{ name: 'check1' }} />;
```

- Checked state

```jsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField inputProps={{ name: 'text2', defaultChecked: true }} />;
```

- With a label

```jsx
import { CheckboxField } from '@zopauk/react-components';

<>
  <CheckboxField label="Do you accept?" inputProps={{ name: 'text3', defaultChecked: true }} />
  <CheckboxField label="Are you sure?" inputProps={{ name: 'text4' }} />
  <CheckboxField label="Do you really accept?" inputProps={{ name: 'text5' }} />
</>;
```

- With an error

```jsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you agree?" errorMessage="Oops! You forgot to check this" inputProps={{ name: 'text6' }} />;
```
