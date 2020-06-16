### Summary

Use `<TextInput />` to render a native HTML `<input />`.

For a richer input see [`<TextField />`](/#/Components/Molecules/TextField).

### Example

- Default

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="default" defaultValue="example of input" />;
```

- With a placeholder

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="placeholder" placeholder="With a placeholder" />;
```

- Valid state

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="isValid" isValid={true} />;
```

- With error

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="error" hasError={true} />;
```

- Disabled

```tsx
import { InputText } from '@zopauk/react-components';

<InputText name="disabled" disabled={true} value="Ha ! You cannot edit me !" />;
```
