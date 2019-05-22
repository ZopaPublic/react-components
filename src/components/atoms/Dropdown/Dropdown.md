Styled Dropdown component.

It consists of 2 components:

- `<Dropdown />`: which extends from html `<select>` element
- `<Option />`: which extends from html `<option>` element

```jsx
import { Option } from './Dropdown';

<Dropdown name="I ❤️ dropdowns" defaultValue="third">
  <Option value="first">First value</Option>
  <Option value="second">Second value</Option>
  <Option value="third">Third value</Option>
  <Option value="fourth">This value is really quite long</Option>
</Dropdown>;
```

#### hasError

```jsx
import { Option } from './Dropdown';

<Dropdown hasError={true}>
  <Option value="first">First value</Option>
</Dropdown>;
```
