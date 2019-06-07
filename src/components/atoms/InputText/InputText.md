Input native component. Simple component for input text, for more complex approach see `TextField` component``

#### Default state

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="default" defaultValue="example of input" />;
```

#### IsValid

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="isValid" isValid={true} />;
```

#### hasError

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="error" hasError={true} />;
```

#### Disabled

```jsx
import { InputText } from '@zopauk/react-components';

<InputText name="disabled" disabled={true} value="Ha ! You cannot edit me !" />;
```
