import React from 'react';
import { render } from 'react-testing-library';
import Facebook from './Facebook';

describe('<Facebook />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Facebook size="40px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
