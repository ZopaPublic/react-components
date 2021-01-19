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

- Hide control

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you want to hide the icon?" name="hideControl" hideControl />;
```

- Default with multiline label

```tsx
import { RadioField } from '@zopauk/react-components';

<div style={{ maxWidth: '200px' }}>
  <CheckboxField label="This is an example of a multiline label" name="check2" />
</div>;
```

- With an error

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you agree?" hasError={true} errorMessage="Oops! You forgot to check this" name="check3" />;
```

- Checked state

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you love rap?" name="check4" defaultChecked={true} />;
```

- Checked and valid

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you love rap?" name="check5" defaultChecked={true} isValid={true} />;
```

- Disabled

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you love rap?" name="check6" disabled={true} />;
```

- Disabled, valid and checked

```tsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you love rap?" name="check7" isValid={true} defaultChecked={true} disabled={true} />;
```
