import { renderHook, act } from '@testing-library/react-hooks';

import useAccordion from './useAccordion';

describe('useAccordion', () => {
  it('should render correct tab and section props', () => {
    const {
      result: {
        current: { getHeaderProps, getSectionProps },
      },
    } = renderHook(useAccordion);

    const header = getHeaderProps('id', 1);
    const section = getSectionProps('id', 1);

    expect(header).toMatchSnapshot();
    expect(section).toMatchSnapshot();
  });

  it('should open and close espective sections on header clicks', () => {
    const {
      result: {
        current: { getHeaderProps, isActiveSection },
      },
    } = renderHook(useAccordion);

    const { onClick: firstHeaderClick } = getHeaderProps('id', 1);

    expect(isActiveSection(1)).toEqual(false);

    act(() => {
      firstHeaderClick();
    });

    expect(isActiveSection(1)).toEqual(true);
    const { onClick: secondHeaderClick } = getHeaderProps('id', 2);
    expect(isActiveSection(2)).toEqual(false);

    act(() => {
      secondHeaderClick();
    });

    expect(isActiveSection(2)).toEqual(true);

    act(() => {
      secondHeaderClick();
    });

    expect(isActiveSection(2)).toEqual(false);
  });

  it('should render matching header and section attributes', () => {
    const {
      result: {
        current: { getHeaderProps, getSectionProps },
      },
    } = renderHook(useAccordion);

    const section = getSectionProps('another-id', 3);
    const header = getHeaderProps('another-id', 3);

    expect(header.id).toEqual(section['aria-labelledby']);
  });
});
