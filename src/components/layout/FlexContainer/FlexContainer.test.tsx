import React from 'react';
import { render } from 'react-testing-library';
import FlexContainer from './FlexContainer';

describe('<FlexContainer />', () => {
  it('renders FlexContainer', () => {
    const { container } = render(<FlexContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
