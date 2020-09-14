import { axe } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import ActionCard from './ActionCard';
import React from 'react';

describe('ActionCard', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(
      <ActionCard id="test-card" handleClick={() => console.log('test')}>
        Action Card Content
      </ActionCard>,
    );
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('should render the action card when loading is true and the card is clicked', () => {
    const { container } = render(
      <ActionCard id="test-card" loading={true} handleClick={() => console.log('test')}>
        Action Card Content
      </ActionCard>,
    );
    fireEvent.click(container);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the action card when loading is true and the card is clicked', () => {
    const { container } = render(
      <ActionCard id="test-card" loading={false} handleClick={() => console.log('test')}>
        Action Card Content
      </ActionCard>,
    );
    fireEvent.click(container);
    expect(container.firstChild).toMatchSnapshot();
  });
});
