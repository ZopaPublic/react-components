### Summary

Use `<TextInput />` to render a native HTML `<input />`.

For a richer input see [`<TextField />`](/#/Components/Molecules/TextField).

If you are using autocomplete, check out suggested values https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete.

### Example

- Default

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="default" defaultValue="Example of input" />;
```

- With a placeholder

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="placeholder" placeholder="With a placeholder" />;
```

- With autocomplete

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="first-name" placeholder="Your first name" autoComplete="given-name" />;
```

- Valid state (to be removed soon)

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="isValid" isValid={true} />;
```

- With error

```tsx
import { InputText, ErrorMessage } from '@zopauk/react-components';

<>
  <InputText name="error" hasError={true} className="mb-2" />
  <ErrorMessage>This field can't be empty</ErrorMessage>
</>;
```

- Disabled

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="disabled" disabled={true} value="Ha ! You cannot edit me !" />;
```

- With an icon on the left

```tsx
import { InputText, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<InputText name="icon-start" startIcon={<Icon variant={faCoffee} />} defaultValue="Example of input" />;
```

- With an icon on the right

```tsx
import { InputText, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<InputText name="icon-end" endIcon={<Icon variant={faCoffee} />} defaultValue="Example of input" />;
```

- Valid with an icon (to be removed soon)

```tsx
import { InputText, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<InputText
  name="icon-start-valid"
  isValid={true}
  startIcon={<Icon variant={faCoffee} />}
  defaultValue="Example of input"
/>;
```

- Invalid with an icon
  Make sure you always use error message to describe error state of the field

```tsx
import { InputText, Icon, colors, ErrorMessage } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<>
  <InputText
    name="icon-start-valid"
    hasError={true}
    startIcon={<Icon variant={faCoffee} />}
    defaultValue="Example of input"
    className="mb-2"
  />
  <ErrorMessage>This field can't be empty</ErrorMessage>
</>;
```

- Disabled with an icon

```tsx
import { InputText, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<InputText
  name="icon-start-invalid"
  disabled={true}
  startIcon={<Icon variant={faCoffee} />}
  defaultValue="Example of input"
/>;
```
