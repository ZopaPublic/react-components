import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '..';
import axe from '../../../../../axe-helper';

describe('<Navbar />', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

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
          label: 'Subheading',
          isDropdownHeading: true,
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

  it('should not render the hamburger icon when no content is added', () => {
    const { queryByTestId } = render(<Navbar />);

    const hamburgerIcon = queryByTestId('hamburger-icon');
    expect(hamburgerIcon).not.toBeInTheDocument();
  });

  it('should render small device navigation with default props with no a11y violations', async () => {
    const { container } = render(<Navbar links={NAV_ITEMS} />);
    expect(container).toMatchSnapshot();

    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('should render component with all the props and no a11y violations', () => {
    const { container } = render(<Navbar overlayLogoWith={<a href="https://www.zopa.com"></a>} links={NAV_ITEMS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render large device navigation with default props and no a11y violations', async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });

    const { container } = render(<Navbar links={NAV_ITEMS} />);
    expect(container).toMatchSnapshot();

    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('should render the collapsed styled on large device navigation with default props and collapsed set to true', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });

    const { container } = render(<Navbar links={NAV_ITEMS} collapsed />);
    expect(container).toMatchSnapshot();
  });
});
