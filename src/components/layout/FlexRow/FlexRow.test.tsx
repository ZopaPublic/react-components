import React from 'react';
import { render } from 'react-testing-library';
import FlexRow from './FlexRow';

describe('<FlexRow />', () => {
  it('renders a FlexRow component', () => {
    const { container } = render(<FlexRow />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
