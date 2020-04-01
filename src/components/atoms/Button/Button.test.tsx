import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

it('renders as "primary" and with no a11y violations', async () => {
  const { container } = render(<Button>Primary</Button>);
  expect(container.firstChild).toMatchSnapshot();
  const results = await axe(container.innerHTML);
  expect(results).toHaveNoViolations();
});

it('renders as "secondary"', () => {
  const { container } = render(<Button styling="link">Secondary</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders as "link"', () => {
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
