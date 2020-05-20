### Summary

By default [`<Navbar.LinksList />`](#/Components/Organisms/Navbar/NavbarLinksList) will render [`<Navbar.Dropdown />`](#/Components/Organisms/Navbar/NavbarDropdown) or [`<Navbar.Link />`](#/Components/Organisms/Navbar/NavbarLink) based on whether links have `children` or not.

⚠️ In the examples below the menu will disappear when scrolling down and reappear when scrolling up

### Examples

- Default theme

```ts
import { Navbar } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    href: '/loans',
    qadata: 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        qadata: 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car finance',
        groupTitle: 'carFinanceGroup',
        groupChildren: [
          {
            label: 'Car loan',
            href: '/loans/car-loans',
            qadata: 'Car_loan.Borrow.topBar.Menu',
          },
        ],
      },
      {
        label: 'Tools',
        groupTitle: 'toolsGroup',
        groupChildren: [
          {
            label: 'Borrowing power',
            href: '/borrowing-power',
            qadata: 'Borrowing_Power.Borrow.topBar.Menu',
          },
        ],
      },
    ],
  },
  {
    label: 'Invest',
    href: '/invest',
    qadata: 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        qadata: 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        qadata: 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
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

<Navbar>
  <Navbar.LinksList links={NAV_ITEMS} />
</Navbar>;
```

<!--
- Custom Navbar components

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef", "overflow": "hidden" } } }
import { Navbar, Link } from '@zopauk/react-components';
const NAV_ITEMS = [
  {
    label: 'Borrow',
    href: '/loans',
    qadata: 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        qadata: 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car finance',
        groupTitle: 'carFinanceGroup',
        groupChildren: [
          {
            label: 'Car loan',
            href: '/loans/car-loans',
            qadata: 'Car_loan.Borrow.topBar.Menu',
          },
        ],
      },
      {
        label: 'Tools',
        groupTitle: 'toolsGroup',
        groupChildren: [
          {
            label: 'Borrowing power',
            href: '/borrowing-power',
            qadata: 'Borrowing_Power.Borrow.topBar.Menu',
          },
        ],
      },
    ],
  },
  {
    label: 'Invest',
    href: '/invest',
    qadata: 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        qadata: 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        qadata: 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
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

<Navbar overlayLogoWith={<a href="https://www.zopa.com" />}>
  <Navbar.LinksList
    links={NAV_ITEMS}
    renderLink={(item, props) => (
      <Link href={item.href} target="_blank" {...props} className="px-4 py-2">
        {item.label}
      </Link>
    )}
  />
</Navbar>;
```

- Without CTA

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef", "overflow": "hidden" } } }
import { Navbar, Link, buttonStyle } from '@zopauk/react-components';
import styled from 'styled-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    href: '/loans',
    qadata: 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        qadata: 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car finance',
        groupTitle: 'carFinanceGroup',
        groupChildren: [
          {
            label: 'Car loan',
            href: '/loans/car-loans',
            qadata: 'Car_loan.Borrow.topBar.Menu',
          },
        ],
      },
      {
        label: 'Tools',
        groupTitle: 'toolsGroup',
        groupChildren: [
          {
            label: 'Borrowing power',
            href: '/borrowing-power',
            qadata: 'Borrowing_Power.Borrow.topBar.Menu',
          },
        ],
      },
    ],
  },
  {
    label: 'Invest',
    href: '/invest',
    qadata: 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        qadata: 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        qadata: 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
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

const ButtonLink = styled(Link)`
  ${buttonStyle}
  margin-left: 8px;
`;

<Navbar withCTA={false}>
  <Navbar.LinksList links={NAV_ITEMS} />
</Navbar>;
```

- Without links

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#00B9A7", "border": "2px solid #efefef", "overflow": "hidden" } } }
import { Navbar, Link, buttonStyle } from '@zopauk/react-components';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  ${buttonStyle}
  margin-left: 8px;
`;

<Navbar
  overlayLogoWith={<a href="https://www.zopa.com" />}
  cta={
    <ButtonLink href="https://www.zopa.com" styling="primary">
      Sign-in
    </ButtonLink>
  }
></Navbar>;
``` -->
