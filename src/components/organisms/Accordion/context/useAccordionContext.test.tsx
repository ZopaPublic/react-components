import { renderHook } from '@testing-library/react-hooks';

import { useAccordionContext } from './useAccordionContext';

describe('useAccordionContext', () => {
  it('should throw if no context present', () => {
    const { result } = renderHook(() => {
      useAccordionContext();
    });
    expect(() => result.current).toThrow('useAccordionContext must be used within an Accordion');
  });
});
