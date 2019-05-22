import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Wrapper from './Wrapper';

describe('<Wrapper />', () => {
  it('renders the component', async () => {
    const { container } = render(<Wrapper />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
