### Summary

`<RadioField />` is a convenient wrapper that renders the following HTML elements:

- `input`: input radio component, hidden for styling purposes
- `label`: text to show next to the radio field. It uses CSS `::after` and `::before` to draw the actual circles of the radio field
- `div`: container to wrap the two previous elements.

⚠️ &nbsp;Note that a `value` prop **must be provided** to automatically set:

- `htmlFor` prop on the `<Label />` component.
- `id` prop on `<InputRadio />` so that is easily to query (.i.e automated tests).

### Examples

- Default

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="option" inputProps={{ value: 'option', name: 'option' }} />;
```

- With an error

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField hasError={true} label="option" inputProps={{ value: 'radio2', name: 'radio2' }} />;
```

- Valid state

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField isValid={true} label="option" inputProps={{ value: 'radio3', name: 'radio3' }} />;
```

- Pre-selected

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField label="I'm checked by default" inputProps={{ value: 'radio4', name: 'radio4', defaultChecked: true }} />;
```

- Disabled and pre-selected

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField
  label="I'm disabled and checked"
  inputProps={{ value: 'radio5', name: 'radio5', disabled: true, defaultChecked: true }}
/>;
```

- Disabled, valid and pre-selected

```jsx
import { RadioField } from '@zopauk/react-components';

<RadioField
  label="I'm disabled, valid and checked"
  isValid={true}
  inputProps={{ value: 'radio6', name: 'radio6', disabled: true, defaultChecked: true }}
/>;
```

- Multiple choices

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
