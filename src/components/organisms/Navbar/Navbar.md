### Summary

`<Navbar />` doesn't render anything: it's just a namespace for `<Navbar.Dropdwn />`, `<Navbar.Dropdown />` and `<Navbar.Link />`.

In order to create a navigation bar to be used within a **Zopa application**, you will need to leverage these components together.

### Examples

- Static

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "border": "2px solid #efefef" } } }
import { Navbar, Link, HamburgerIcon, ProfileIcon, colors } from '@zopauk/react-components';

<Navbar.Layout
  backgroundColor={colors.base.primary}
  left={
    <Navbar.Dropdown
      id="unique-id"
      ariaLabel="Awesome navbar dropdown"
      items={[{ label: 'one', href: '#' }, { label: 'two', href: '#' }, { label: 'three', href: '#' }]}
      renderOpener={({ open, getOpenerProps }) => (
        <div style={{ padding: 8 }}>
          <Navbar.Link href="#" open={open} {...getOpenerProps()}>
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
  right={
    <Navbar.Dropdown
      id="another-unique-id"
      ariaLabel="Awesome navbar dropdown"
      items={[{ label: 'one', href: '#' }, { label: 'two', href: '#' }]}
      renderOpener={({ open, getOpenerProps }) => {
        return (
          <div style={{ padding: 8 }}>
            <Navbar.Link color="#fff" href="#" open={open} {...getOpenerProps()}>
              <ProfileIcon activeColor="#fff" inactiveColor="#fff" />
            </Navbar.Link>
          </div>
        );
      }}
      renderItem={({ item: { label, href }, getItemProps }) => (
        <Link href={href} {...getItemProps()}>
          {label}
        </Link>
      )}
    />
  }
/>;
```

- Responsive

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)", "border": "2px solid #efefef" } } }
import { Navbar, Link, HamburgerIcon, FlexCol, colors } from '@zopauk/react-components';

class ResponsiveNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLeft = this.renderLeft.bind(this);
  }

  renderLeft() {
    const items = [{ label: 'one', href: '#' }, { label: 'two', href: '#' }, { label: 'three', href: '#' }];
    return (
      <div>
        <FlexCol xs="auto" m="hidden">
          <Navbar.Dropdown
            id="yet-another-unique-id"
            ariaLabel="Awesome navbar dropdown"
            items={items}
            renderOpener={({ open, getOpenerProps }) => (
              <div style={{ padding: 8 }}>
                <Navbar.Link color={colors.neutral.white} href="#" open={open} {...getOpenerProps()}>
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
        </FlexCol>
        <FlexCol xs="hidden" m="auto">
          {items.map(({ label, href }, index) => (
            <Link key={`desktop-link-${index}`} color={colors.neutral.white} href={href} style={{ padding: 8 }}>
              {label}
            </Link>
          ))}
        </FlexCol>
      </div>
    );
  }

  render() {
    return <Navbar.Layout backgroundColor="#00B9A7" left={this.renderLeft()} />;
  }
}

<ResponsiveNavbar />;
```
