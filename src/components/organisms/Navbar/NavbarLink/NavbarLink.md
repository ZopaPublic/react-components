### Summary

`<Navbar.Link />` is a wrap around our [`<Link />`](/#/Components/Atoms/Link) atom, decorated with tow extra props: `active` and `withChevron` and `isDropdownLink`.

❗️We highly recommend you do not use this component on its own. Instead use [`<Navbar.LinksList />`](#/Components/Organisms/Navbar/NavbarLinksList) to render navbar items

### Examples

- Default

```ts { "props": { "style": { "backgroundColor": "#FFFFFF", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link>Navbar.Link</Navbar.Link>;
```

- Active

```ts { "props": { "style": { "backgroundColor": "#FFFFFF", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link active>Navbar.Link</Navbar.Link>;
```

- With chevron icon pointing down

```ts { "props": { "style": { "backgroundColor": "#FFFFFF", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link withChevron open={false}>
  Navbar.Link
</Navbar.Link>;
```

- With chevron icon pointing up

```ts { "props": { "style": { "backgroundColor": "#FFFFFF", "border": "none" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Link withChevron open>
  Navbar.Link
</Navbar.Link>;
```
