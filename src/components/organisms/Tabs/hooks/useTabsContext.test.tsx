import { renderHook } from '@testing-library/react-hooks';

import { useTabsContext } from './useTabsContext';

describe('useTabsContext', () => {
  it('should throw if no context present', () => {
    const { result } = renderHook(() => {
      useTabsContext();
    });
    expect(() => result.current).toThrow('useTabsContext must be used within Tabs');
  });
});
