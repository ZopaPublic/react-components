### Summary

[`<Navbar.LinksList />`](#/Components/Organisms/Navbar/NavbarLinksList) is responsible for rendering navbar links. By default it will render [`<Navbar.Dropdown />`](#/Components/Organisms/Navbar/NavbarDropdown) for `links` with `children` and [`<Navbar.Link />`](#/Components/Organisms/Navbar/NavbarLink) for `links` within a dropdown (if using `<Navbar.Dropdown />`) or `links` without `children`. These can be changed using the `renderLink` props.

### Examples

- Default

```ts
import { Navbar } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'About',
    qadata: 'About.topBar.Menu',
    children: [
      {
        label: 'About Zopa',
        href: '/about',
        qadata: 'About.About.topBar.Menu',
      },
      {
        label: 'Our story',
        href: '/about/our-story',
        qadata: 'Story.About.topBar.Menu',
      },
      {
        label: 'Our board',
        href: '/about/board',
        qadata: 'Our_Board.About.topBar.Menu',
      },
      {
        label: 'Our leadership team',
        href: '/about/leadership',
        qadata: 'Our_Leadership.About.topBar.Menu',
      },
      {
        label: 'Awards',
        href: '/about/awards',
        qadata: 'Awards.About.topBar.Menu',
      },
      {
        label: 'Careers',
        href: '/about/careers',
        qadata: 'Careers.About.topBar.Menu',
      },
      {
        label: 'Press office',
        href: '/about/press',
        qadata: 'Press_office.About.topBar.Menu',
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    qadata: 'Support.topBar.Menu',
  },
];

<Navbar.LinksList links={NAV_ITEMS} />;
```

- Custom components

```ts
import { Navbar, Link } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'About',
    qadata: 'About.topBar.Menu',
    children: [
      {
        label: 'About Zopa',
        href: '/about',
        qadata: 'About.About.topBar.Menu',
      },
      {
        label: 'Our story',
        href: '/about/our-story',
        qadata: 'Story.About.topBar.Menu',
      },
      {
        label: 'Our board',
        href: '/about/board',
        qadata: 'Our_Board.About.topBar.Menu',
      },
      {
        label: 'Our leadership team',
        href: '/about/leadership',
        qadata: 'Our_Leadership.About.topBar.Menu',
      },
      {
        label: 'Awards',
        href: '/about/awards',
        qadata: 'Awards.About.topBar.Menu',
      },
      {
        label: 'Careers',
        href: '/about/careers',
        qadata: 'Careers.About.topBar.Menu',
      },
      {
        label: 'Press office',
        href: '/about/press',
        qadata: 'Press_office.About.topBar.Menu',
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    qadata: 'Support.topBar.Menu',
  },
];

<Navbar.LinksList
  links={NAV_ITEMS}
  renderLink={(item, props) => (
    <Link href={item.href} target="_blank" {...props}>
      {item.label}
    </Link>
  )}
/>;
```
