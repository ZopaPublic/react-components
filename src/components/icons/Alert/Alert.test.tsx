import React from 'react';
import { render } from 'react-testing-library';
import Alert from './Alert';

describe('<Alert />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Alert size="40px" fillColor="rebeccaPurple" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
