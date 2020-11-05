import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Stars from './Stars';
import 'jest-styled-components';

describe('<TrustpilotStars />', () => {
  it('renders default 5 stars rating without a11y violations', async () => {
    const { container } = render(<Stars />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  it.each`
    rating
    ${0}
    ${1}
    ${1.5}
    ${2}
    ${2.5}
    ${3}
    ${3.5}
    ${4}
    ${4.5}
    ${5}
  `('renders without a11y violations the given rating: $rating', async ({ rating }) => {
    const { container } = render(<Stars rating={rating} />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
