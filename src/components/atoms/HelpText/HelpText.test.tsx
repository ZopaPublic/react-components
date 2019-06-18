import React from 'react';
import { render } from '@testing-library/react';
import HelpText from './HelpText';

describe('<HelpText />', () => {
  it('renders the component with props', () => {
    const { container } = render(<HelpText>Additional info</HelpText>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
