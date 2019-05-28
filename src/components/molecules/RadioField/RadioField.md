`<RadioField />` is a single radio field element.

Its error message is meant to be shown in a group of them.

It's composed of three HTML elements:

- `input`: input radio component, hidden for styling purposes\_
- `label`: text to show next to the radio field. It uses CSS `::after` and `::before` to draw the actual circles of the radio field
- `div`: container to wrap the two previous elements.

`value` must be provided so that it internally sets:

- `htmlFor` prop on the `<InputLabel />` component.
- `id` prop on `<InputRadio />` so that is easily to query (.i.e automated tests).

#### default

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="option" inputProps={{ value: 'option', name: 'option' }} />;
```

#### with error

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField hasError={true} label="option" inputProps={{ value: 'radio2', name: 'radio2' }} />;
```

#### valid

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField isValid={true} label="option" inputProps={{ value: 'radio3', name: 'radio3' }} />;
```

#### pre-selected

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="I'm checked by default" inputProps={{ value: 'radio4', name: 'radio4', defaultChecked: true }} />;
```

#### disabled and pre-selected

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField
  label="I'm disabled and checked"
  inputProps={{ value: 'radio5', name: 'radio5', disabled: true, defaultChecked: true }}
/>;
```

#### disabled, valid and pre-selected

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField
  label="I'm disabled, valid and checked"
  isValid={true}
  inputProps={{ value: 'radio6', name: 'radio6', disabled: true, defaultChecked: true }}
/>;
```

#### multiple choices

```jsx
import { RadioField } from '@zopauk/react-components';

<>
  <RadioField label="Apple 🍏" inputProps={{ value: 'apple', name: 'apple-choice' }} />
  <RadioField label="Avocado 🥑" inputProps={{ value: 'avocado', name: 'avocado-choice' }} />
  <RadioField label="Chilly 🌶" inputProps={{ value: 'chilly', name: 'chilly-choice' }} />
  <RadioField label="Sweet Potato 🍠" inputProps={{ value: 'potato', name: 'potato-choice' }} />
  <RadioField label="Kiwi 🥝" inputProps={{ value: 'kiwi', name: 'kiwi-choice' }} />
  <RadioField label="Watermelon 🍉" inputProps={{ value: 'watermelon', name: 'watermelon-choice' }} />
</>;
```
