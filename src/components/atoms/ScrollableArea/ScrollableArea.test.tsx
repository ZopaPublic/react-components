import React from 'react';
import { render } from '@testing-library/react';
import ScrollableArea from './ScrollableArea';

describe('<ScrollableArea />', () => {
  it('renders the component with the required props', () => {
    const { container } = render(<ScrollableArea>This is an example</ScrollableArea>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
