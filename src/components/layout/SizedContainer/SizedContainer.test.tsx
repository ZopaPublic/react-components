import React from 'react';
import { render } from '@testing-library/react';
import { TContainerSizes } from '../../types';
import SizedContainer from './SizedContainer';

describe('<SizedContainer />', () => {
  it('renders the component with default props', () => {
    const { container } = render(<SizedContainer>Container</SizedContainer>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with sizes props', () => {
    const sizes: TContainerSizes[] = ['short', 'long', 'medium', 'fullLength'];
    sizes.forEach(size => {
      const { container } = render(<SizedContainer size={size}>Container</SizedContainer>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
