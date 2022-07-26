import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
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

  it('doesnt render the link with a target icon', () => {
    const { container } = render(
      <Link href="http://duckduckgo.com" showTargetIcon={false} target="_blank">
        text
      </Link>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders for being displayed on top of dark backgrounds', () => {
    const { container } = render(
      <Link href="http://duckduckgo.com" target="_blank" negative>
        text
      </Link>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
