import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
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

  it('renders the component with default props', async () => {
    const { container } = render(<ZopaFooter />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with a legalOnly prop', async () => {
    const { container } = render(<ZopaFooter legalOnly />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<ZopaFooter />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
