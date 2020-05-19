### Summary

The purpose of `<Navbar.Dropdown />` is to handle the visibility state of a dropdown within the main navigation bar.

It also handles all the accessibility attributes internally and passes them down through render props:`renderOpener` and `renderItem`.

The dropdown contents are up to you but by default will render [`<Navbar.Link />`](#/Components/Organisms/Navbar/NavbarLink)

❗️We highly recommend you do not use this component on its own. Instead use [`<Navbar.LinksList />`](#/Components/Organisms/Navbar/NavbarLinksList) to render navbar items

### Examples

- Standard usage

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "border": "2px solid #efefef"} } }
import { Navbar } from '@zopauk/react-components';

<Navbar.Dropdown
  id="basic-example-id"
  ariaLabel="test"
  items={[
    { label: 'one', href: '#' },
    { label: 'two', href: '#' },
    { label: 'three', href: '#' },
  ]}
  renderOpener={({ open, getOpenerProps }) => (
    <div style={{ padding: 8 }}>
      <Navbar.Link href="#" {...getOpenerProps()}>
        opener
      </Navbar.Link>
    </div>
  )}
/>;
```

<!--
- With custom components

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "border": "2px solid #efefef" } } }
import { Navbar, Link, HamburgerIcon, colors } from '@zopauk/react-components';

<Navbar.Dropdown
  id="custom-example-id"
  ariaLabel="test"
  items={[
    { label: 'one', href: '#' },
    { label: 'two', href: '#' },
    { label: 'three', href: '#' },
  ]}
  renderOpener={({ open, getOpenerProps }) => (
    <div style={{ padding: 8 }}>
      <Navbar.Link href="#" {...getOpenerProps()}>
        <HamburgerIcon size="30px" activeColor={colors.actionDark} inactiveColor={colors.actionPlain} />
      </Navbar.Link>
    </div>
  )}
  renderItem={({ item: { label, href }, getItemProps }) => (
    <Link href={href} {...getItemProps()}>
      {label}
    </Link>
  )}
/>;
``` -->
