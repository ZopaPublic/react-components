import { calculateTrackPosition } from './index';

describe('calculateTrackPosition', () => {
  it.each`
    min          | max          | value   | expectedPosition
    ${undefined} | ${undefined} | ${50}   | ${0.5}
    ${undefined} | ${200}       | ${50}   | ${0.25}
    ${50}        | ${undefined} | ${75}   | ${0.5}
    ${100}       | ${1100}      | ${600}  | ${0.5}
    ${-10}       | ${10}        | ${0}    | ${0.5}
    ${-200}      | ${-100}      | ${-125} | ${0.75}
    ${100}       | ${100}       | ${100}  | ${0}
    ${100}       | ${50}        | ${50}   | ${0}
    ${100}       | ${200}       | ${500}  | ${1}
    ${100}       | ${200}       | ${50}   | ${0}
  `(
    'Calculates proper position for min: $min, max: $max and value: $value',
    ({ min, max, value, expectedPosition }) => {
      expect(calculateTrackPosition({ min, max, value })).toBe(expectedPosition);
    },
  );
});
