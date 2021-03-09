import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import { colors, typography } from '../../../constants';
import Heading from './Heading';
const {
  sizes: { heading: headingSizes },
} = typography;

describe('<Heading />', () => {
  it('renders without  a11y violations', async () => {
    const { container } = render(<Heading as="h1">Text</Heading>);
    const results = await axe(container.innerHTML);

    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  it('renders display size as h2 at mobile', async () => {
    const { container } = render(
      <Heading as="h1" size="display">
        Text
      </Heading>,
    );

    expect(container).toMatchSnapshot();
  });

  it.each`
    tag
    ${'h1'}
    ${'h2'}
    ${'h3'}
    ${'h4'}
    ${'h5'}
    ${'h6'}
  `('it can render with a different HTML tag: $tag', ({ tag }) => {
    const { container } = render(<Heading as={tag}>Header</Heading>);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelector(tag)).not.toBe(null);
  });

  it('allows to control the size despite the rendered HTML tag', () => {
    const { container } = render(
      <Heading as="h1" size="h3">
        Header
      </Heading>,
    );

    expect(container.firstChild).toHaveStyleRule('font-size', headingSizes.h3);
  });

  it('renders with H4 size as default when rendering a `span`', () => {
    const { container } = render(<Heading as="span">Header</Heading>);

    expect(container.firstChild).toHaveStyleRule('font-size', headingSizes.h4);
  });

  it('allows to control the size when rendering as a `span`', () => {
    const { container } = render(
      <Heading as="span" size="h4">
        Header
      </Heading>,
    );

    expect(container.firstChild).toHaveStyleRule('font-size', headingSizes.h4);
  });

  it.each`
    hex                   | name
    ${colors.white}       | ${'White'}
    ${colors.greyDarkest} | ${'Dark'}
  `('can render in different colors: $name – $hex', ({ hex }) => {
    const { container } = render(
      <Heading as="h2" color={hex}>
        Text
      </Heading>,
    );
    expect(container.firstChild).toHaveStyleRule('color', hex);
  });

  it('can render without margin bottom', () => {
    const { container } = render(<Heading as="h1">Header</Heading>);

    expect(container.firstChild).toHaveStyleRule('margin', '0');
  });

  it.each`
    direction
    ${'left'}
    ${'right'}
    ${'center'}
  `('can align at:  $direction', ({ direction }) => {
    const { container } = render(
      <Heading as="h4" align={direction}>
        Text
      </Heading>,
    );

    expect(container.firstChild).toHaveStyleRule('text-align', direction);
  });
});
