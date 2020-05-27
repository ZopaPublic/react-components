import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';

describe('<Navbar.LinksList />', () => {
  it('should render component with default props', () => {
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
    const container = render(<Navbar.LinksList links={NAV_ITEMS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a dropdown when links contain children', () => {
    const NAV_ITEMS = [
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
        ],
      },
    ];

    render(<Navbar.LinksList links={NAV_ITEMS} />);
    const dropdownItem = screen.getByText('About Zopa');
    expect(dropdownItem).toHaveAttribute('role', 'menuitem');
  });

  it('should render a navlink when links contain children', () => {
    const NAV_ITEMS = [
      {
        label: 'Support',
        href: '/contact',
        qadata: 'Support.topBar.Menu',
      },
    ];

    render(<Navbar.LinksList links={NAV_ITEMS} />);
    const menuItem = screen.getByText('Support');
    expect(menuItem).toHaveAttribute('href', '/contact');
  });
});
