import React from 'react';
import { render } from '@testing-library/react';
import FlexRow from './FlexRow';

describe('<FlexRow />', () => {
  it('renders a FlexRow component', () => {
    const { container } = render(<FlexRow />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
