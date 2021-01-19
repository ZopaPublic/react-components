import { render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import 'jest-styled-components';
import React from 'react';
import { FIVE_STAR_ID } from './ratings/FiveStar';
import { FOUR_HALF_STAR_ID } from './ratings/FourHalfStar';
import { FOUR_STAR_ID } from './ratings/FourStar';
import { ONE_HALF_STAR_ID } from './ratings/OneHalfStar';
import { ONE_STAR_ID } from './ratings/OneStar';
import { THREE_HALF_STAR_ID } from './ratings/ThreeHalfStar';
import { THREE_STAR_ID } from './ratings/ThreeStar';
import { TWO_HALF_STAR_ID } from './ratings/TwoHalfStar';
import { TWO_STAR_ID } from './ratings/TwoStar';
import { ZERO_STAR_ID } from './ratings/ZeroStar';
import Stars from './Stars';

describe('<TrustpilotStars />', () => {
  it('renders default 5 stars rating without a11y violations', async () => {
    const { container } = render(<Stars />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  describe('Ratings', () => {
    const { container, rerender } = render(<Stars />);
    it.each`
      rating | ID
      ${0}   | ${ZERO_STAR_ID}
      ${1}   | ${ONE_STAR_ID}
      ${1.5} | ${ONE_HALF_STAR_ID}
      ${2}   | ${TWO_STAR_ID}
      ${2.5} | ${TWO_HALF_STAR_ID}
      ${3}   | ${THREE_STAR_ID}
      ${3.5} | ${THREE_HALF_STAR_ID}
      ${4}   | ${FOUR_STAR_ID}
      ${4.5} | ${FOUR_HALF_STAR_ID}
      ${5}   | ${FIVE_STAR_ID}
    `('renders the given rating: $rating', async ({ rating, ID }) => {
      rerender(<Stars rating={rating} />);
      expect(container.querySelector(`#${ID}`)).toBeTruthy();
    });
  });
});
