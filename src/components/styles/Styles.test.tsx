import React from 'react';
import { render } from '@testing-library/react';
import GlobalStyles from './GlobalStyles';
import { getGlobalStyleTags } from '../../helpers/test/styles';

it('allows to set global generic styles ', () => {
  render(<GlobalStyles />);

  const [globalGenericStyles] = getGlobalStyleTags();
  expect(globalGenericStyles).toMatchSnapshot();
});
