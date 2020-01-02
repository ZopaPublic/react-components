import React from 'react';
import { render } from '@testing-library/react';
import FlexCol from './FlexCol';

describe('<FlexCol />', () => {
  it('renders without issues', () => {
    const { container } = render(<FlexCol />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with a custom gutter', () => {
    const customGutter = 12;
    const { container } = render(<FlexCol gutter={12}>A column</FlexCol>);

    expect(container.firstChild).toHaveStyleRule('padding-right', `${customGutter}px`);
    expect(container.firstChild).toHaveStyleRule('padding-left', `${customGutter}px`);
  });

  it('renders with custom alignment', () => {
    const customAlignment = 'flex-start';
    const { container } = render(<FlexCol align={customAlignment}>A column</FlexCol>);

    expect(container.firstChild).toHaveStyleRule('align-self', customAlignment);
  });

  it('renders with custom columns', () => {
    const { container } = render(
      <FlexCol cols={4} m={2}>
        A column
      </FlexCol>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders hidden at certain breakpoint', () => {
    const { container } = render(<FlexCol m="hidden">A column</FlexCol>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders filling the columns at certain breakpoint', () => {
    const { container } = render(<FlexCol m="fill">A column</FlexCol>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
