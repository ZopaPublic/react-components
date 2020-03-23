### Summary

`<DropdownField />` has exactly the same behaviour as [`<TextField />`](/#/Components/Molecules/TextField), the only difference being that it renders with `<Dropdown />` instead of `<InputText />`.

### Example

```tsx
import { DropdownField } from '@zopauk/react-components';

<DropdownField
  hasError={true}
  label="Your cool dropdown"
  errorMessage="You need to choose something!"
  inputSize="short"
  name="foo"
  helpText="Additional info"
>
  <option value="first">First value</option>
  <option value="second">Second value</option>
  <option value="third">Third value</option>
</DropdownField>;
```
