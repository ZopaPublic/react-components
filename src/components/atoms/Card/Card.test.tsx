import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('<Card type="card"/>', () => {
  it('renders default card type with explicit card type', () => {
    const { container } = render(
      <Card type="card">
        <div>Content</div>
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders default card type with implicit card type with no a11y violations', async () => {
    const { container } = render(
      <Card>
        <div>Content</div>
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
  it('renders the card type with multiple props', () => {
    const { container } = render(
      <Card type="card" borderColor="#abc" backgroundColor="#def">
        <div>Content</div>
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('<Card type="linkCard"/>', () => {
  it('renders default linkCard', () => {
    const { container } = render(<Card type="linkCard" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the component with props', () => {
    const { container } = render(
      <Card type="linkCard" borderColor="#abc" backgroundColor="#def">
        <div>Content</div>
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
