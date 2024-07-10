import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConditionalWrapper } from './ConditionalWrapper';

describe('ConditionalWrapper', () => {
  const wrapperFunction = (children: React.ReactNode): JSX.Element => <div className="wrapper">{children}</div>;

  it('renders without crashing', () => {
    render(
      <ConditionalWrapper condition={false} wrapper={wrapperFunction}>
        Test
      </ConditionalWrapper>,
    );
  });

  it('does not wrap children when condition is false', () => {
    const { container }: RenderResult = render(
      <ConditionalWrapper condition={false} wrapper={wrapperFunction}>
        Test
      </ConditionalWrapper>,
    );
    expect(container.querySelector('.wrapper')).toBeNull();
  });

  it('wraps children when condition is true', () => {
    const { container }: RenderResult = render(
      <ConditionalWrapper condition={true} wrapper={wrapperFunction}>
        Test
      </ConditionalWrapper>,
    );
    expect(container.querySelector('.wrapper')).not.toBeNull();
  });
});
