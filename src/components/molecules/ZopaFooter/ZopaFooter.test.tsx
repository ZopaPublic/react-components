import * as React from 'react';
import axe from '../../../../axe-helper';
import { cleanup, render, screen } from '@testing-library/react';
import ZopaFooter from './ZopaFooter';
import { mockDate, MockDate } from '../../../helpers/test/date';

const fixedDate = new Date('2025-02-28T09:39:59');

describe('<ZopaFooter />', () => {
  let date: MockDate;

  beforeEach(() => {
    date = mockDate(new Date(fixedDate));
    date.startMocking();
  });
  afterEach(() => {
    date.finishMocking();
    cleanup();
  });

  it('renders correct logo with baseUrl prop', async () => {
    render(<ZopaFooter baseUrl="http://whatever.com" />);
    const logoLink = screen.getByTitle('Logo');
    expect(logoLink).toHaveAttribute('href', 'http://whatever.com');
  });

  it('renders correct Zopa footer links', async () => {
    render(<ZopaFooter />);
    const firstLink = screen.getByText('Car finance');
    expect(firstLink).toHaveAttribute('href', 'https://www.zopa.com/car-finance');
  });

  it('renders correct Zopa social links', async () => {
    render(<ZopaFooter />);
    const firstLink = screen.getByLabelText('Facebook');
    expect(firstLink).toHaveAttribute('href', 'https://facebook.com/zopa');
  });

  it('renders custom footer links correctly', () => {
    const customFooterLinks = [
      {
        heading: 'Custom Section',
        links: [
          { href: 'https://custom-link1.com', text: 'Custom Link 1' },
          { href: 'https://custom-link2.com', text: 'Custom Link 2' },
        ],
      },
    ];

    render(<ZopaFooter customFooterLinks={customFooterLinks} />);
    // Check that the section heading is rendered
    expect(screen.getByText('Custom Section')).toBeInTheDocument();
    // Check that each link is rendered with the correct href and text
    const link1 = screen.getByText('Custom Link 1');
    expect(link1).toHaveAttribute('href', 'https://custom-link1.com');
    const link2 = screen.getByText('Custom Link 2');
    expect(link2).toHaveAttribute('href', 'https://custom-link2.com');
  });

  // This has to go before the next test, because react-testing-library isn't smart enough to clean up after itself by default
  // unmounting or cleanup has no effect
  // see: https://github.com/testing-library/react-testing-library/issues/716#issuecomment-688120431
  // none of the solutions other than swapping the order of the tests seems to work here

  it('allows a user to render a custom main legal block', () => {
    render(<ZopaFooter mainCustomLegalCopy="Hello main legal copy" />);
    const expectedText = screen.getByText('Hello main legal copy');
    const unexpectedText = screen.queryAllByText(
      /Zopa Bank Limited is authorised by the Prudential Regulation Authority/,
    );
    expect(expectedText).toBeDefined();
    expect(unexpectedText.length).toBe(0);
  });

  it('allows a user to render a multiline custom main legal block', () => {
    render(<ZopaFooter mainCustomLegalCopy={['Hello Line1', 'Hello Line2']} />);
    const expectedText1 = screen.getByText('Hello Line1');
    const expectedText2 = screen.getByText('Hello Line2');
    expect(expectedText1).toBeDefined();
    expect(expectedText2).toBeDefined();
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<ZopaFooter />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
