import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';
import { colors } from '../../../constants/colors';

describe('<Text />', () => {
  it('renders without  a11y violations', async () => {
    const { container } = render(<Text>Text</Text>);
    const results = await axe(container.innerHTML);

    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  it('can render with bottom white-space', () => {
    const { container } = render(
      <Text as="p" mb>
        Long paragraph with some bottom white-space to prevent text next to it colliding.
      </Text>,
    );

    expect(container.firstChild).toHaveStyleRule('margin', '0');
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
    size       | pixels
    ${'lead'}  | ${'20px'}
    ${'base'}  | ${'16px'}
    ${'small'} | ${'14px'}
  `('can render at different sizes:  $size – $pixels', ({ size, pixels }) => {
    const { container } = render(<Text size={size}>Text</Text>);
    expect(container.firstChild).toHaveStyleRule('font-size', pixels);
  });

  it.each`
    name          | weight
    ${'regular'}  | ${'400'}
    ${'semibold'} | ${'600'}
    ${'bold'}     | ${'700'}
  `('can render at different weights:  $name', ({ name, weight }) => {
    const { container } = render(<Text weight={name}>Text</Text>);
    expect(container.firstChild).toHaveStyleRule('font-weight', weight);
  });

  it.each`
    hex                   | name
    ${colors.white}       | ${'White'}
    ${colors.grey}        | ${'Grey'}
    ${colors.greyDarkest} | ${'Grey Darkest'}
    ${colors.success}     | ${'Success'}
    ${colors.alert}       | ${'Alert'}
  `('can render in different colors: $name – $hex', ({ hex }) => {
    const { container } = render(<Text color={hex}>Text</Text>);
    expect(container.firstChild).toHaveStyleRule('color', hex);
  });
});
