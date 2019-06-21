import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('<Navbar.Dropdown />', () => {
  const items = [{ label: 'one', href: '#' }, { label: 'two', href: '#' }];
  const renderOpener = ({ getOpenerProps }) => <button {...getOpenerProps()}>opener</button>;
  const renderItem = ({ item: { label, href }, getItemProps }) => (
    <a href={href} {...getItemProps()}>
      {label}
    </a>
  );

  const renderComponent = () =>
    render(
      <>
        <Navbar.Dropdown
          id="unique-dropdown-id "
          ariaLabel="test"
          items={items}
          renderOpener={renderOpener}
          renderItem={renderItem}
        />
        <button>button</button>
      </>,
    );

  afterEach(cleanup);

  it('should render component', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  ['Enter', ' ', 'ArrowUp', 'ArrowDown'].forEach(key => {
    it(`should open the dropdown on ${key} press`, () => {
      const { getAllByRole } = renderComponent();
      const [opener] = getAllByRole('menuitem');
      expect(opener.getAttribute('aria-expanded')).toEqual('false');
      fireEvent.focus(opener);
      fireEvent.keyDown(opener, { key });
      expect(opener.getAttribute('aria-expanded')).toEqual('true');
    });
  });

  it(`should navigate through items with arrow up/down keys`, () => {
    const { getAllByRole, getByText } = renderComponent();
    const [opener] = getAllByRole('menuitem');
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
    const { getAllByRole, getByText } = renderComponent();
    const [opener] = getAllByRole('menuitem');
    const otherElement = getByText('button');
    fireEvent.focus(opener);
    fireEvent.keyDown(opener, { key: ' ' });
    expect(opener.getAttribute('aria-expanded')).toEqual('true');
    fireEvent.focus(otherElement);
    expect(opener.getAttribute('aria-expanded')).toEqual('false');
  });
});
