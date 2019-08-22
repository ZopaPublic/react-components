Styled Dropdown component.

It consists of 2 components:

- `<Dropdown />`: which extends from html `<select>` element
- `<Option />`: which extends from html `<option>` element

```jsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown name="I ❤️ dropdowns" defaultValue="third">
  <DropdownOption value="first">First value</DropdownOption>
  <DropdownOption value="second">Second value</DropdownOption>
  <DropdownOption value="third">Third value</DropdownOption>
  <DropdownOption value="fourth">This value is really quite long</DropdownOption>
</Dropdown>;
```

#### hasError

```jsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown hasError={true}>
  <DropdownOption value="first">First value</DropdownOption>
</Dropdown>;
```

#### isValid

```jsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown isValid={true}>
  <DropdownOption value="first">First value</DropdownOption>
</Dropdown>;
```
