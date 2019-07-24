import React from 'react';
import { render } from '@testing-library/react';
import * as colors from '../../../constants/colors';
import CheckMark from './CheckMark';

describe('<CheckMark />', () => {
  it(`renders without crashing`, () => {
    const { container } = render(<CheckMark />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it(`renders with a specific color`, () => {
    const { container } = render(<CheckMark color={colors.primary.pink500} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
