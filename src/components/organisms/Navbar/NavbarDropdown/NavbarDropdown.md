### Summary

The purpose of `<Navbar.Dropdown />` is to handle the visibility state of a dropdwon within the main navigation bar.

It also handles all the accessibility attributes internally and passes them down through render props:`renderOpener` and `renderItem`.

The dropdown will be aligned to the right by default; however, if there's not enough room for the dropdown, it align to the left instead.

- It's meant to be used at least along [`<Navbar />`](#/Components/Organisms/Navbar/Navbar)
- The dropdown contents are up to you but we highly recommend to use [`<Navbar.Link />`](#/Components/Organisms/Navbar/NavbarLink) for brand consistency

### Examples

- Standard usage

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef"} } }
import { Navbar } from '@zopauk/react-components';

<Navbar
  left={
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
      renderItem={({ item: { label, href }, getItemProps }) => (
        <Navbar.Link href={href} {...getItemProps()}>
          {label}
        </Navbar.Link>
      )}
    />
  }
/>;
```

- With custom components

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef" } } }
import { Navbar, Link, HamburgerIcon, colors } from '@zopauk/react-components';

<Navbar
  backgroundColor={colors.base.primary}
  left={
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
            <HamburgerIcon size="30px" activeColor={colors.neutral.white} inactiveColor={colors.neutral.white} />
          </Navbar.Link>
        </div>
      )}
      renderItem={({ item: { label, href }, getItemProps }) => (
        <Link href={href} {...getItemProps()}>
          {label}
        </Link>
      )}
    />
  }
/>;
```
