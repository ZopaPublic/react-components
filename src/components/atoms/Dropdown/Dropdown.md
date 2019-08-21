### Summary

`<Dropdown />` is a component extending the native HTML `<select />` element.

`<DropdownOption />` extemds the native HTML `<option />` element.

### Examples

- Standard

```jsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown name="I ❤️ dropdowns" defaultValue="third">
  <DropdownOption value="first">First value</DropdownOption>
  <DropdownOption value="second">Second value</DropdownOption>
  <DropdownOption value="third">Third value</DropdownOption>
  <DropdownOption value="fourth">This value is really quite long</DropdownOption>
</Dropdown>;
```

- With error

```jsx
import { Dropdown, DropdownOption } from '@zopauk/react-components';

<Dropdown hasError={true}>
  <DropdownOption value="first">First value</DropdownOption>
</Dropdown>;
```
