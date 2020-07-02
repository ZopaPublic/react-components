### Summary

`<TextField />` is a convenient wrapper composed of four different components:

- [`<SizedContainer />`](/#/Components/Layout/SizedContainer)
- [`<InputText />`](/#/Components/Atoms/InputText)
- [`<InputLabel />`](/#/Components/Atoms/InputLabel)
- [`<ErrorMessage />`](/#/Components/Atoms/ErrorMessage)

⚠️ &nbsp;Note that a `name` prop **must be provided** to automatically set:

- `htmlFor` prop on `<InputLabel />`
- `data-automation` prop on `<ErrorMessage />`
- `id` prop on `<InputText />`

### Examples

- Default

```tsx
import { TextField } from '@zopauk/react-components';

<TextField name="text1" />;
```

- With a specific size

```tsx
import { TextField } from '@zopauk/react-components';

<TextField inputSize="short" name="text2" />;
```

- With a label

```tsx
import { TextField } from '@zopauk/react-components';

<TextField label="First name" name="text3" />;
```

- With an icon

```tsx
import { TextField, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<TextField startIcon={<Icon variant={faCoffee} />} label="First name" name="text4" />;
```

- With error message

```tsx
import { TextField } from '@zopauk/react-components';

<TextField errorMessage="Oops ! Error !" name="text5" />;
```

- Valid state

```tsx
import { TextField } from '@zopauk/react-components';

<TextField isValid={true} name="text6" />;
```

- With all the previous configuration

```tsx
import { TextField, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<TextField
  label="Label"
  startIcon={<Icon variant={faCoffee} />}
  helpText="Additional info"
  errorMessage="Not ok!"
  inputSize="short"
  name="text7"
/>;
```
