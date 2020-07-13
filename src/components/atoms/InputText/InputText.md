### Summary

Use `<TextInput />` to render a native HTML `<input />`.

For a richer input see [`<TextField />`](/#/Components/Molecules/TextField).

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

- Valid with an icon

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

- Inalid with an icon

```tsx
import { InputText, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<InputText
  name="icon-start-valid"
  hasError={true}
  startIcon={<Icon variant={faCoffee} />}
  defaultValue="Example of input"
/>;
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
