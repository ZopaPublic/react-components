### Summary

`<Dropdown />` is a component extending the native HTML `<select />` element.

`<DropdownOption />` extends the native HTML `<option />` element.

### Examples

- Standard

```tsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown name="I ❤️ dropdowns" defaultValue="third">
  <DropdownOption value="first">First value</DropdownOption>
  <DropdownOption value="second">Second value</DropdownOption>
  <DropdownOption value="third">Third value</DropdownOption>
  <DropdownOption value="fourth">This value is really quite long</DropdownOption>
</Dropdown>;
```

- With error

```tsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown hasError={true}>
  <DropdownOption value="first">First value</DropdownOption>
</Dropdown>;
```

- Valid

```tsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown isValid={true}>
  <DropdownOption value="first">First value</DropdownOption>
</Dropdown>;
```

- Disabled

```tsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown disabled={true}>
  <DropdownOption value="first">First value</DropdownOption>
</Dropdown>;
```
