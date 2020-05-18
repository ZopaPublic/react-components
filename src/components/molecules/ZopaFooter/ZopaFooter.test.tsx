import { axe } from 'jest-axe';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ZopaFooter from './ZopaFooter';
import { mockDate, IMockDate } from '../../../helpers/test/date';

const fixedDate = new Date('2025-02-28T09:39:59');

describe('<ZopaFooter />', () => {
  let date: IMockDate;

  beforeEach(() => {
    date = mockDate(new Date(fixedDate));
    date.startMocking();
  });
  afterEach(() => {
    date.finishMocking();
  });

  it('renders correct urls  with baseUrl prop', async () => {
    render(<ZopaFooter baseUrl="http://whatever.com" />);

    const firstLink = screen.getByText('Car loans');
    const logoLink = screen.getByTitle('Logo');

    expect(firstLink).toHaveAttribute('href', 'http://whatever.com/loans/car-loans');
    expect(logoLink).toHaveAttribute('href', 'http://whatever.com');
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<ZopaFooter />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
