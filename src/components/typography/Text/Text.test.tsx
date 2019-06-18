import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Text, { ITextProps } from './Text';

describe('Text', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<Text>Text</Text>);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders the component default props', () => {
    const { container } = render(<Text>Text</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component custom props', () => {
    const props: ITextProps = {
      color: '#111',
      fw: 'bold',
      as: 'p',
    };
    const { container } = render(<Text {...props}>Text</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
