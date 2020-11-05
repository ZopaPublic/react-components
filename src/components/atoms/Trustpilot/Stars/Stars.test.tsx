import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Stars from './Stars';
import 'jest-styled-components';

describe('<TrustpilotStars />', () => {
  it('renders without  a11y violations', async () => {
    const { container } = render(<Stars />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  it.each`
    stars
    ${1}
    ${2}
    ${3}
    ${4}
    ${5}
  `('renders the given number of stars: $stars', ({ stars }) => {
    const { container } = render(<Stars stars={stars} />);
    expect(container.querySelectorAll('path')).toHaveLength(stars * 2); // there's 2 paths for each star
  });
});
