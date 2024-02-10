import { renderHook } from '@testing-library/react';

import { useAccordionContext } from './useAccordionContext';

describe('useAccordionContext', () => {
  it('should throw if no context present', () => {
    expect(() => renderHook(useAccordionContext)).toThrow('useAccordionContext must be used within an Accordion');
  });
});
