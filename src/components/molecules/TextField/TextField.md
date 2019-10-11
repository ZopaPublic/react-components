### Summary

`<TextField />` is a convenient wrapper composed of four different components:

- [`<SizedContainer />`](/#/Components/Layout/SizedContainer)
- [`<InputText />`](/#/Components/Atoms/InputText)
- [`<Label />`](/#/Components/Atoms/Label)
- [`<ErrorMessage />`](/#/Components/Atoms/ErrorMessage)

⚠️ &nbsp;Note that a `name` prop **must be provided** to automatically set:

- `htmlFor` prop on `<Label />`
- `data-automation` prop on `<ErrorMessage />`
- `id` prop on `<InputText />`

### Examples

- Default

```jsx
import { TextField } from '@zopauk/react-components';

<TextField inputProps={{ name: 'text1' }} />;
```

- With a specific size

```jsx
import { TextField } from '@zopauk/react-components';

<TextField size="short" inputProps={{ name: 'text2' }} />;
```

- With a label

```jsx
import { TextField } from '@zopauk/react-components';

<TextField label="First name" inputProps={{ name: 'text3' }} />;
```

- With error message

```jsx
import { TextField } from '@zopauk/react-components';

<TextField errorMessage="Oops ! Error !" inputProps={{ name: 'text4' }} />;
```

- Valid state

```jsx
import { TextField } from '@zopauk/react-components';

<TextField isValid={true} inputProps={{ name: 'text5' }} />;
```

- With all the previous configuration

```jsx
import { TextField } from '@zopauk/react-components';

<TextField
  label="Label"
  helpText="Additional info"
  errorMessage="Not ok!"
  size="short"
  inputProps={{ name: 'text6' }}
/>;
```

- With a custom text prefix

```jsx
import { TextField } from '@zopauk/react-components';

<TextField label="Label" size="short" inputProps={{ name: 'text7' }} prefix={'£'} />;
```
