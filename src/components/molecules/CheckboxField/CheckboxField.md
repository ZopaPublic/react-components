This is a wrapper of 2 different components:

- Build-in custom checkbox input: This component is attached to the `label` so it's not possible to use standalone.
- InputLabel: Only rendered if the prop `label` is filled in. This component has his own custom styles to show the
  checkbox image (square), so it's not possible to use standalone.
- ErrorMessage: Error message. Only rendered if the prop `errorMessage` is filled in.

`inputProps.name` must be set so it's used to automatically set:

- `htmlFor` in the `InputLabel` component.
- `data-automation` in the `ErrorMessage`
- `id` in `InputCheckbox` for automation test purposes.

#### Default state

```jsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField inputProps={{ name: 'check1' }} />;
```

#### Checked

```jsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField inputProps={{ name: 'text2', defaultChecked: true }} />;
```

#### With label

```jsx
import { CheckboxField } from '@zopauk/react-components';

<>
  <CheckboxField label="Do you accept?" inputProps={{ name: 'text3', defaultChecked: true }} />
  <CheckboxField label="Are you sure?" inputProps={{ name: 'text4' }} />
  <CheckboxField label="Do you really accept?" inputProps={{ name: 'text5' }} />
</>;
```

#### With error

```jsx
import { CheckboxField } from '@zopauk/react-components';

<CheckboxField label="Do you agree?" errorMessage="Oops! You forgot to check this" inputProps={{ name: 'text6' }} />;
```
