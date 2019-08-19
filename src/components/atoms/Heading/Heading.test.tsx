import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('<Heading />', () => {
  it('renders without  a11y violations', async () => {
    const { container } = render(<Heading as="h1">Text</Heading>);
    const results = await axe(container.innerHTML);

    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  it.each`
    tag
    ${'h1'}
    ${'h2'}
    ${'h3'}
    ${'h4'}
  `('it can render with a different HTML tag: $tag', ({ tag }: { tag: 'h1' | 'h2' | 'h3' | 'h4' }) => {
    const { container } = render(<Heading as={tag}>Text</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
