import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../../Icon/Icon';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import Item from '../Item/Item';

describe('<List />', () => {
  it('renders as ul', () => {
    const { container } = render(
      <List>
        <li>I am a list item</li>
      </List>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as ol', () => {
    const { container } = render(
      <List as="ol">
        <li>I am a list item</li>
      </List>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with icon', () => {
    const { container } = render(
      <List as="ol">
        <Item icon={<Icon variant={faCoffee} />}>I am a list item</Item>
      </List>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders nested lists', () => {
    const { container } = render(
      <List>
        <Item>
          <p>I am a list item</p>
          <List>
            <Item>
              <p>I am a list item</p>
            </Item>
          </List>
        </Item>
      </List>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
