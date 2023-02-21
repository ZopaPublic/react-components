import React from 'react';
import axe from '../../../../axe-helper';
import { render } from '@testing-library/react';
import Spinner from './Spinner';
import ThreeDotsSpinner from './ThreeDotsSpinner';

describe('<Spinner />', () => {
  it('renders a spinner', async () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders small', () => {
    const { container } = render(<Spinner size="small" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders negative', () => {
    const { container } = render(<Spinner negative />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('<ThreeDotsSpinner />', () => {
  it('renders three dots spinner', async () => {
    const { container } = render(<ThreeDotsSpinner />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
