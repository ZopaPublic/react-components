import React from 'react';
import { render } from '@testing-library/react';
import { Margin, Padding } from './Spacing';
import { getGlobalStyleTags } from '../../helpers/test/styles';

it('renders classes for margin spacing', () => {
  render(<Margin />);

  const [globalGenericStyles] = getGlobalStyleTags();
  expect(globalGenericStyles).toMatchSnapshot();
});

it('renders classes for padding spacing', () => {
  render(<Padding />);

  const [globalGenericStyles] = getGlobalStyleTags();
  expect(globalGenericStyles).toMatchSnapshot();
});
