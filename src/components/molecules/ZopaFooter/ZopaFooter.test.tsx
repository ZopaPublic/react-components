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

  it('renders correct urls  with baseUrl prop', async () => {
    render(<ZopaFooter baseUrl="http://whatever.com" />);

    const firstLink = screen.getByText('Car hire purchase');
    const logoLink = screen.getByTitle('Logo');

    expect(firstLink).toHaveAttribute('href', 'http://whatever.com/car-finance');
    expect(logoLink).toHaveAttribute('href', 'http://whatever.com');
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
