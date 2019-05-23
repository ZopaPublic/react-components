import { useRef, useState } from 'react';
import { isArrowDown, isArrowUp } from '../../../helpers/keyboard-keys';
import { mod } from '../../../helpers/utils';

const useAccordion = () => {
  const headersRefs = useRef<React.RefObject<HTMLButtonElement>['current'][]>([]).current;

  const getHeaderRef = (index: number) => (node: HTMLButtonElement) => {
    if (node === null) {
      headersRefs.splice(index, 1);
    } else {
      headersRefs[index] = node;
    }
  };

  const sectionsRefs = useRef<React.RefObject<HTMLDivElement>['current'][]>([]).current;

  const getSectionRef = (index: number) => (node: HTMLDivElement) => {
    if (node === null) {
      sectionsRefs.splice(index, 1);
    } else {
      sectionsRefs[index] = node;
    }
  };

  const [activeSections, updateActiveSections] = useState<number[]>([]);

  const isActiveSection = (index: number) => activeSections.includes(index);

  const getSectionStyle = (index: number) => {
    const sectionRef = sectionsRefs[index];
    const baseStyle = {
      overflow: 'hidden',
      transition: 'height 200ms linear',
    };
    if (!sectionRef || !isActiveSection(index)) {
      return { ...baseStyle, height: '0px' };
    }
    return { ...baseStyle, height: `${sectionRef.clientHeight}px` };
  };

  const toggleAccordionSection = (index: number) =>
    updateActiveSections(prevSections =>
      prevSections.includes(index) ? prevSections.filter(i => i !== index) : prevSections.concat(index),
    );

  const [cursorPosition, updateCursorPosition] = useState<number>(-1);

  const getOnClick = (index: number) => () => {
    updateCursorPosition(index);
    toggleAccordionSection(index);
  };

  const getOnFocus = (index: number) => () => updateCursorPosition(index);

  const getLinkingId = (id: string) => `${id}-tab`;

  const focusOnHeader = (nextCursorPosition: number) => {
    const headerRef = headersRefs[nextCursorPosition];
    if (headerRef) {
      headerRef.focus();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const { length } = headersRefs;
    if (isArrowUp(e)) {
      e.preventDefault();
      const nextCursorPosition = mod(cursorPosition - 1, length);
      updateCursorPosition(nextCursorPosition);
      focusOnHeader(nextCursorPosition);
    } else if (isArrowDown(e)) {
      e.preventDefault();
      const nextCursorPosition = mod(cursorPosition + 1, length);
      updateCursorPosition(nextCursorPosition);
      focusOnHeader(nextCursorPosition);
    }
  };

  const getHeaderProps = (id: string, index: number) => ({
    'aria-controls': getLinkingId(id),
    'aria-disabled': isActiveSection(index),
    'aria-expanded': isActiveSection(index),
    id,
    key: id,
    onClick: getOnClick(index),
    onFocus: getOnFocus(index),
    onKeyDown,
    ref: getHeaderRef(index),
  });

  const getSectionProps = (id: string, index: number) => ({
    'aria-hidden': !isActiveSection(index),
    'aria-labelledby': id,
    id: getLinkingId(id),
    key: getLinkingId(id),
    ref: getSectionRef(index),
    role: 'region',
    style: getSectionStyle(index),
  });

  return {
    getHeaderProps,
    getSectionProps,
    isActiveSection,
  };
};

export default useAccordion;
