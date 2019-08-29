import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import { colors } from '../../../constants/colors';
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
    const { container } = render(<Heading as={tag}>Header</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.each`
    hex                     | name
    ${colors.neutral.white} | ${'White'}
    ${colors.neutral.dark}  | ${'Dark'}
  `('can render in different colors: $name – $hex', ({ hex }) => {
    const { container } = render(
      <Heading as="h2" color={hex}>
        Text
      </Heading>,
    );
    expect(container.firstChild).toHaveStyleRule('color', hex);
  });

  it('can render without margin bottom', () => {
    const { container } = render(
      <Heading as="h1" mb={false}>
        Header
      </Heading>,
    );

    expect(container.firstChild).toHaveStyleRule('margin', '0');
  });
});
