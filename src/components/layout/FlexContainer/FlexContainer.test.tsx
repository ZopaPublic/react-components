import React from 'react';
import { render } from '@testing-library/react';
import FlexContainer from './FlexContainer';

describe('<FlexContainer />', () => {
  it('renders FlexContainer', () => {
    const { container } = render(<FlexContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
