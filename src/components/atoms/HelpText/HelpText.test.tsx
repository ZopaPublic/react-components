import React from 'react';
import { render } from 'react-testing-library';
import HelpText from './HelpText';

describe('<HelpText />', () => {
  it('renders the component with props', () => {
    const { container } = render(<HelpText>Additional info</HelpText>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
