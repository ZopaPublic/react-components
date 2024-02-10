import { renderHook } from '@testing-library/react';

import { useTabsContext } from './useTabsContext';

describe('useTabsContext', () => {
  it('should throw if no context present', () => {
    expect(() =>
      renderHook(() => {
        useTabsContext();
      }),
    ).toThrow('useTabsContext must be used within Tabs');
  });
});
