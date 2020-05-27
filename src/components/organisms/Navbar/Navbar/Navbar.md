### Summary

Navbar will render an array of links provided using a dropdown which works on click and a link which is a wrap around our [`<Link />`](/#/Components/Atoms/Link) atom, decorated with tow extra props: `active` and `withChevron`. You can opt out displaying the CTA using `withCTA` prop.

⚠️ The menu animates when scrolling. For a better preview view [Default example](#/Components/Organisms/Navbar/Navbar/1)

### Examples

- Default theme

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px" } } }
import { Navbar } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    href: '/loans',
    onClick: () => alert('testing2'),
    qadata: 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        onClick: () => alert('testing'),
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

<Navbar overlayLogoWith={<span></span>} links={NAV_ITEMS} />;
```

- Custom Navbar components

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px" } } }
import styled from 'styled-components';

import { Navbar, Link, NavbarLinkStyles } from '@zopauk/react-components';

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

// could be a gatsby or react-router-dom <Link />
const SomeLibraryLink = ({ href, ...rest }) => <a href={href} {...rest} />;

const CustomLink = styled(SomeLibraryLink)`
  ${NavbarLinkStyles}
`;

<Navbar
  overlayLogoWith={<a href="https://www.zopa.com" />}
  links={NAV_ITEMS}
  renderLink={(item, index, props) => (
    <CustomLink href={item.href} target="_blank" {...props} className="px-4 py-2" is>
      {item.label}
    </CustomLink>
  )}
/>;
```

- Without CTA

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px" } } }
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

<Navbar withCTA={false} links={NAV_ITEMS} />;
```

- Without links

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px" } } }
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
```
