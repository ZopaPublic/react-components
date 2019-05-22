import { act, testHook } from 'react-testing-library';

import useAccordion from './useAccordion';

describe('useAccordion', () => {
  let getHeaderProps;
  let getSectionProps;
  let isActiveSection;

  beforeEach(() => {
    testHook(() => {
      const accordion = useAccordion();
      getHeaderProps = accordion.getHeaderProps;
      getSectionProps = accordion.getSectionProps;
      isActiveSection = accordion.isActiveSection;
    });
  });

  it('should render correct tab and section props', () => {
    const header = getHeaderProps('id', 1);
    const section = getSectionProps('id', 1);
    expect(header).toMatchSnapshot();
    expect(section).toMatchSnapshot();
  });

  it('should open and close espective sections on header clicks', () => {
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
    const section = getSectionProps('another-id', 3);
    const header = getHeaderProps('another-id', 3);
    expect(header.id).toEqual(section['aria-labelledby']);
  });
});
