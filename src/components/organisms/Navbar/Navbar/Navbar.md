### Summary

`<Navbar>` renders the base navigation bar layout, creating **right**, **left**, and **center** to render the contents you like.

It's meant to be used with other navbar components like [`<Navbar.Link />`](#/Components/Organisms/Navbar/NavbarLink) and [`<Navbar.Dropdown />`](#/Components/Organisms/Navbar/NavbarDropdown)

### Examples

- White theme

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef" } } }
import { Navbar, Link } from '@zopauk/react-components';

<Navbar left={<Link>left</Link>} center={<Link>center</Link>} right={<Link>right</Link>} />;
```

- Teal theme

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#fff", "border": "2px solid #efefef" } } }
import { Navbar, Link } from '@zopauk/react-components';

<Navbar
  backgroundColor={colors.base.primary}
  left={<Link color={colors.neutral.white}>left</Link>}
  right={<Link color={colors.neutral.white}>right</Link>}
/>;
```
