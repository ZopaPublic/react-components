import React from 'react';
import { render } from 'react-testing-library';
import ZopaLogo from './ZopaLogo';

describe('<ZopaLogo />', () => {
  it('renders the component with props', () => {
    const { container } = render(<ZopaLogo width="70px" height="50px" color="red" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
