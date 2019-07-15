`<TextField /> is a wrapper composed of four different components:

- `<SizedContainer />` ... ( _container with `size` prop_ )
- `<InputText />` ... ( _native input text_ )
- `<InputLabel />` ... ( _label text, only rendered if the prop `label` is provided_ )
- `<HelpText />` ... ( _addition information_ )
- `<SizedContainer />` ... ( _error message, only rendered if the prop `errorMessage` provided_ )

`name` must be provided to automatically set:

- `htmlFor` prop on `<InputLabel />`
- `data-automation` prop on `<ErrorMessage />`
- `id` prop on `<InputText />`

#### default

```jsx
import { TextField } from '@zopauk/react-components';

<TextField inputProps={{ name: 'text1' }} />;
```

#### specific size

```jsx
import { TextField } from '@zopauk/react-components';

<TextField size="short" inputProps={{ name: 'text2' }} />;
```

#### with label

```jsx
import { TextField } from '@zopauk/react-components';

<TextField label="First name" inputProps={{ name: 'text3' }} />;
```

#### with error message

```jsx
import { TextField } from '@zopauk/react-components';

<TextField errorMessage="Oops ! Error !" inputProps={{ name: 'text4' }} />;
```

#### valid

```jsx
import { TextField } from '@zopauk/react-components';

<TextField isValid={true} inputProps={{ name: 'text5' }} />;
```

#### with label, help text, error message and specific size

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

#### with prefix

```jsx
import { TextField } from '@zopauk/react-components';

<TextField label="Label" size="short" inputProps={{ name: 'text7' }} prefix={'£'} />;
```
