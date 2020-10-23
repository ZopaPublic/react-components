import { renderHook, act } from '@testing-library/react-hooks';

import { useAccordion } from './useAccordion';

describe('useAccordion', () => {
  it('should render correct tab and section props', () => {
    const { result } = renderHook(useAccordion);

    const header = result.current.getHeaderProps('id', 1);
    const section = result.current.getSectionProps('id', 1);

    expect(header).toMatchSnapshot();
    expect(section).toMatchSnapshot();
  });

  it('should open and close espective sections on header clicks', () => {
    const { result } = renderHook(useAccordion);

    const { onClick: firstHeaderClick } = result.current.getHeaderProps('one', 1);

    expect(result.current.isActiveSection(1)).toEqual(false);

    act(() => {
      firstHeaderClick();
    });

    expect(result.current.isActiveSection(1)).toEqual(true);
    const { onClick: secondHeaderClick } = result.current.getHeaderProps('two', 2);
    expect(result.current.isActiveSection(2)).toEqual(false);

    act(() => {
      secondHeaderClick();
    });

    expect(result.current.isActiveSection(2)).toEqual(true);

    act(() => {
      secondHeaderClick();
    });

    expect(result.current.isActiveSection(2)).toEqual(false);
  });

  it('should render matching header and section attributes', () => {
    const { result } = renderHook(useAccordion);

    const section = result.current.getSectionProps('another-id', 3);
    const header = result.current.getHeaderProps('another-id', 3);

    expect(header.id).toEqual(section['aria-labelledby']);
  });
});
