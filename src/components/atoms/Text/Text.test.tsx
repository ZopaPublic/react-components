import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

describe('<Text />', () => {
  it('renders without  a11y violations', async () => {
    const { container } = render(<Text>Text</Text>);
    const results = await axe(container.innerHTML);

    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  it.each`
    tag
    ${'span'}
    ${'p'}
  `('it can render as an HTML $tag tag', ({ tag }) => {
    const { container } = render(<Text as={tag}>Text</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.each`
    size | pixels
    ${1} | ${'16px'}
    ${2} | ${'14px (default)'}
    ${3} | ${'12px'}
  `('can render at different sizes:  $size – $pixels', ({ size }) => {
    const { container } = render(<Text size={size}>Text</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.each`
    weight
    ${'regular'}
    ${'semibold'}
    ${'bold'}
  `('can render at different weights:  $weight', ({ weight }) => {
    const { container } = render(<Text weight={weight}>Text</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
