import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import SidekickCard from './SidekickCard';

xdescribe('<SidekickCard />', () => {
  it('renders SidekickCard with triumph card type  with no a11y violations', async () => {
    const { container } = render(
      <SidekickCard type="triumph">
        <div>Content</div>
      </SidekickCard>,
    );
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
  it('renders SidekickCard with verified card type', () => {
    const { container } = render(
      <SidekickCard type="verified">
        <div>Content</div>
      </SidekickCard>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders SidekickCard with alert card type', () => {
    const { container } = render(
      <SidekickCard type="alert">
        <div>Content</div>
      </SidekickCard>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
