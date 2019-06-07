Basic example:

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)" } } }
import { Navbar, Link, HamburgerIcon, ProfileIcon } from '@zopauk/react-components';

<Navbar.Layout
  backgroundColor="#00B9A7"
  left={
    <Navbar.Dropdown
      id="unique-id"
      ariaLabel="Awesome navbar dropdown"
      items={[{ label: 'one', href: '#' }, { label: 'two', href: '#' }, { label: 'three', href: '#' }]}
      renderOpener={({ open, getOpenerProps }) => (
        <div style={{ padding: 8 }}>
          <Navbar.Link href="#" open={open} {...getOpenerProps()}>
            <HamburgerIcon size="30px" activeColor="#fff" inactiveColor="#fff" />
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

Responsive Navbar example:

```js { "props": { "style": { "transform": "translate3d(0, 0, 0)" } } }
import { Navbar, Link, HamburgerIcon, FlexCol } from '@zopauk/react-components';

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
                <Navbar.Link color="#fff" href="#" open={open} {...getOpenerProps()}>
                  <HamburgerIcon size="30px" activeColor="#fff" inactiveColor="#fff" />
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
            <Link key={`desktop-link-${index}`} href={href} style={{ padding: 8 }}>
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
