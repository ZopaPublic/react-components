import React from 'react';
import { render } from '@testing-library/react';
import Separator from './Separator';

describe('<Separator />', () => {
  it('renders the component', async () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
