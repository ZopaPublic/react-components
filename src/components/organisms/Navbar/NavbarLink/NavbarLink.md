### Summary

`<Navbar.Link />` is a wrap aroudn our [`<Link />`](/#/Components/Atoms/Link) atom, decorated with tow extra props: `active` and `withChevron`.

It's meant to be used with other [`<Navbar />`](#/Components/Organisms/Navbar) components like [`<Navbar.Dropdown />`](#/Components/Organisms/Navbar/NavbarDropdown)

### Examples

- Default

```ts { "props": { "style": { "backgroundColor": "#00B9A7", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff">Navbar.Link</Navbar.Link>;
```

- Active

```ts { "props": { "style": { "backgroundColor": "#00B9A7", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff" active>
  Navbar.Link
</Navbar.Link>;
```

- With chevron icon pointing down

```ts { "props": { "style": { "backgroundColor": "#00B9A7", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff" withChevron open={false}>
  Navbar.Link
</Navbar.Link>;
```

- With chevron icon pointing up

```ts { "props": { "style": { "backgroundColor": "#00B9A7", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link color="#fff" withChevron open>
  Navbar.Link
</Navbar.Link>;
```
