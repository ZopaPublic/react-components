import React from 'react';
import { render } from '@testing-library/react';
import FontStyles from './Fonts';
import GlobalStyles from './GlobalStyles';
import { getGlobalStyleTags } from '../../helpers/test/styles';

it('allows to set global generic styles ', () => {
  render(<GlobalStyles />);

  const [globalGenericStyles] = getGlobalStyleTags();
  expect(globalGenericStyles).toMatchSnapshot();
});

it('allows to set global font styles', () => {
  render(<FontStyles />);

  const [globalFontStyles] = getGlobalStyleTags();
  expect(globalFontStyles).toMatchSnapshot();
});
