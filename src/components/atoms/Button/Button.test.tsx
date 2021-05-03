import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(<Button>Primary</Button>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders as "secondary"', () => {
    const { container } = render(<Button styling="secondary">Secondary</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as "link"', () => {
    const { container } = render(<Button styling="link">Secondary</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const { container } = render(<Button disabled>Secondary</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders wide', () => {
    const { container } = render(<Button fullWidth>Secondary</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders loading as "primary"', () => {
    const { container } = render(<Button loading>Loading</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders loading as "secondary"', () => {
    const { container } = render(
      <Button styling="secondary" loading>
        Waiting
      </Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders loading as "secondary"', () => {
    const { container } = render(
      <Button styling="secondary" loading>
        Waiting
      </Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders loading with disabled attribute', () => {
    const { container } = render(<Button loading>Loading</Button>);
    expect(container.firstChild).toHaveAttribute('disabled');
  });

  it.each`
    type
    ${'submit'}
    ${'reset'}
    ${'button'}
  `('renders with the specified type: $type', ({ type }) => {
    const { getByText } = render(<Button type={type}>Foo</Button>);
    const target = getByText('Foo');
    expect(target.getAttribute('type')).toEqual(type);
  });
});
