import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import { colors } from '../../../constants/colors';
import Link from './Link';

describe('<Link />', () => {
  it('renders the link with default values and the svg is hidden with no a11y violations', async () => {
    const { container } = render(<Link href="http://duckduckgo.com">text</Link>);
    expect(container.firstChild).toMatchSnapshot();

    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders the link with target _blank with the svg visible', () => {
    const { container } = render(
      <Link href="http://duckduckgo.com" target="_blank">
        text
      </Link>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each`
    hex                      | name
    ${colors.base.secondary} | ${'Blue'}
    ${colors.neutral.white}  | ${'White'}
  `('can render in different colors: $name – $hex', ({ hex }) => {
    const { container } = render(
      <Link href="http://duckduckgo.com" color={hex}>
        text
      </Link>,
    );
    expect(container.firstChild).toHaveStyleRule('color', hex);
  });
});
