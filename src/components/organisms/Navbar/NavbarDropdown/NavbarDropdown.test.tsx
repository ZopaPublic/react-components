import React from 'react';
import axe from '../../../../../axe-helper';
import { fireEvent, render } from '@testing-library/react';
import NavbarDropdown from './NavbarDropdown';

describe('<NavbarDropdown />', () => {
  const items = [
    { label: 'one', href: '#' },
    { label: 'two', href: '#' },
  ];
  const renderItem = ({ item: { label, href }, getItemProps }: any) => (
    <a href={href} {...getItemProps()}>
      {label}
    </a>
  );

  const renderComponent = () =>
    render(
      <>
        <ul>
          <NavbarDropdown id="unique-dropdown-id" label="test" items={items} renderItem={renderItem} />
        </ul>
        <button>button</button>
      </>,
    );

  it.only('renders with no a11y violations', async () => {
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  ['Enter', ' ', 'ArrowUp', 'ArrowDown'].forEach((key) => {
    it(`should open the dropdown on ${key} press`, () => {
      const { getAllByTestId } = renderComponent();
      const [opener] = getAllByTestId('ZA.navbar-item');
      expect(opener.getAttribute('aria-expanded')).toEqual('false');
      fireEvent.focus(opener);
      fireEvent.keyDown(opener, { key });
      expect(opener.getAttribute('aria-expanded')).toEqual('true');
    });
  });

  it(`should navigate through items with arrow up/down keys`, () => {
    const { getAllByTestId, getByText } = renderComponent();
    const [opener] = getAllByTestId('ZA.navbar-item');
    const itemOne = getByText('one');
    const itemTwo = getByText('two');
    fireEvent.focus(opener);
    fireEvent.keyDown(opener, { key: ' ' });
    fireEvent.keyDown(opener, { key: 'ArrowDown' });
    expect(itemOne).toHaveFocus();
    fireEvent.keyDown(itemOne, { key: 'ArrowDown' });
    expect(itemTwo).toHaveFocus();
    fireEvent.keyDown(itemTwo, { key: 'ArrowUp' });
    expect(itemOne).toHaveFocus();
  });

  it(`should close the dropdown when focused on an element outside of dropdown`, () => {
    const { getAllByTestId, getByText } = renderComponent();
    const [opener] = getAllByTestId('ZA.navbar-item');
    const otherElement = getByText('button');
    fireEvent.focus(opener);
    fireEvent.keyDown(opener, { key: ' ' });
    expect(opener.getAttribute('aria-expanded')).toEqual('true');
    fireEvent.focus(otherElement);
    expect(opener.getAttribute('aria-expanded')).toEqual('false');
  });
});
