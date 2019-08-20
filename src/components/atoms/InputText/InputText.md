### Summary

Use `<TextInput />` to render a native HTML `<input />`.

For a richer input see [`<TextField />`](/#/Components/Molecules/TextField).

### Example

- Default

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="default" defaultValue="example of input" />;
```

- Valid state

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="isValid" isValid={true} />;
```

- With error

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="error" hasError={true} />;
```

- Disabled

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="disabled" disabled={true} value="Ha ! You cannot edit me !" />;
```
