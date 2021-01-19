import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../../Icon/Icon';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';

describe('<Item />', () => {
  it('renders the component with default props', () => {
    const { container } = render(<Item>I am a list item</Item>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with icon', () => {
    const { container } = render(
      <Item className="appended-classname" icon={<Icon variant={faCoffee} />}>
        Get some coffee
      </Item>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
