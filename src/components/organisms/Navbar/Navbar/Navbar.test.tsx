import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';

describe('<Navbar />', () => {
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

  it('should render small device navigation with default props', () => {
    const { container } = render(<Navbar links={NAV_ITEMS} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render the hamburger icon when no content is added', () => {
    render(<Navbar />);
    const hamburgerIcon = screen.queryByTestId('hamburger-icon');
    expect(hamburgerIcon).not.toBeInTheDocument();
  });

  it('should render component with all the props', () => {
    const { container } = render(<Navbar overlayLogoWith={<a href="https://www.zopa.com"></a>} links={NAV_ITEMS} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render large device navigation with default props', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });

    const { container } = render(<Navbar links={NAV_ITEMS} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
