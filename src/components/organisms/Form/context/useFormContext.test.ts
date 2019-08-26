import { renderHook } from '@testing-library/react-hooks';

import useFormContext from './useFormContext';

describe('useFormContext', () => {
  it('should throw if no context present', () => {
    const { result } = renderHook(() => {
      useFormContext();
    });
    expect(() => result.current).toThrow('useFormContext must be used within a Form');
  });
});
