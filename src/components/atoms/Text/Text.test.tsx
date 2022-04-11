import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';
import { colors } from '../../../constants';
import 'jest-styled-components';

describe('<Text />', () => {
  it('renders without  a11y violations', async () => {
    const { container } = render(<Text>Text</Text>);
    const results = await axe(container.innerHTML);

    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  it('can render with bottom white-space', () => {
    const { container } = render(
      <Text as="p" className="mb-6">
        Long paragraph with some bottom white-space to prevent text next to it colliding.
      </Text>,
    );

    expect(container.firstChild).toHaveStyleRule('margin', '0');
  });

  it('should render inline by default', () => {
    const { container } = render(<Text />);
    expect(container).not.toHaveStyleRule('display', 'block');
  });

  it.each`
    margin
    ${'m-6'}
    ${'mt-6'}
    ${'mb-8'}
    ${'ml-8'}
    ${'mr-6'}
    ${'mx-2'}
    ${'my-2'}
    ${'m:mb-2'}
    ${'m:m-2'}
  `('should apply block display when supplied a spacing class: $margin', ({ margin }) => {
    const { container } = render(<Text className={margin} />);
    expect(container.firstChild).toHaveStyleRule('display', 'block');
  });

  it.each`
    padding
    ${'p-6'}
    ${'pt-6'}
    ${'pb-8'}
    ${'pl-8'}
    ${'pr-6'}
    ${'px-2'}
    ${'py-2'}
    ${'m:pb-2'}
    ${'m:p-2'}
  `('should apply block display when supplied a spacing class: $padding', ({ padding }) => {
    const { container } = render(<Text className={padding} />);
    expect(container.firstChild).toHaveStyleRule('display', 'block');
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
    ${'lead'}  | ${'18px'}
    ${'body'}  | ${'16px'}
    ${'small'} | ${'14px'}
  `('can render at different sizes:  $size – $pixels', ({ size, pixels }) => {
    const { container } = render(<Text size={size}>Text</Text>);
    expect(container.firstChild).toHaveStyleRule('font-size', pixels);
  });

  it.each`
    name          | weight
    ${'regular'}  | ${'400'}
    ${'semiBold'} | ${'600'}
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
    ${colors.alertDark}   | ${'Alert Dark'}
  `('can render in different colors: $name – $hex', ({ hex }) => {
    const { container } = render(<Text color={hex}>Text</Text>);
    expect(container.firstChild).toHaveStyleRule('color', hex);
  });

  it.each`
    direction
    ${'left'}
    ${'right'}
    ${'center'}
  `('can align at:  $direction', ({ direction }) => {
    const { container } = render(<Text align={direction}>Text</Text>);
    expect(container.firstChild).toHaveStyleRule('text-align', direction);
  });
});
