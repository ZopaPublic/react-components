This is a flexible Navbar subcomponent meant to be used with other components such as Navbar.Link and Navbar.Layout. However, it can be used with other atoms and molecules as well (e.g Link). It handles the visibility state and all the related accessibility attributes internally and passes them down through render props: renderOpener and renderItem. Also, it handles the positioning of the dropdown list for you. It's aligned to the right by default; however, if there's not enough room for the dropdown, it gets aligned to the left.

Basic example:

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef"} } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Dropdown
  id="basic-example-id"
  ariaLabel="test"
  items={[{ label: 'one', href: '#' }, { label: 'two', href: '#' }, { label: 'three', href: '#' }]}
  renderOpener={({ open, getOpenerProps }) => (
    <div style={{ padding: 8 }}>
      <a href="#" {...getOpenerProps()}>
        opener
      </a>
    </div>
  )}
  renderItem={({ item: { label, href }, getItemProps }) => (
    <a href={href} {...getItemProps()}>
      {label}
    </a>
  )}
/>;
```

Example with custom components:

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef" } } }
import { Navbar, Link, HamburgerIcon } from '@zopauk/react-components';

<Navbar.Dropdown
  id="custom-example-id"
  ariaLabel="test"
  items={[{ label: 'one', href: '#' }, { label: 'two', href: '#' }, { label: 'three', href: '#' }]}
  renderOpener={({ open, getOpenerProps }) => (
    <div style={{ padding: 8 }}>
      <Link href="#" {...getOpenerProps()}>
        <HamburgerIcon size="30px" activeColor="#fff" inactiveColor="#fff" />
      </Link>
    </div>
  )}
  renderItem={({ item: { label, href }, getItemProps }) => (
    <Link href={href} {...getItemProps()}>
      {label}
    </Link>
  )}
/>;
```
