import { useRef, useState, KeyboardEvent, RefObject } from 'react';
import { isArrowDown, isArrowUp } from '../../helpers/keyboard-keys';
import { mod } from '../../helpers/utils';

export interface ExpanderHeaderProps {
  'aria-controls': string;
  'aria-disabled': boolean;
  'aria-expanded': boolean;
  id: string;
  key: string;
  onClick: () => void;
  onFocus: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  ref: (node: HTMLButtonElement) => void;
}

export type GetExpanderHeaderProps = (id: string, index: number) => ExpanderHeaderProps;

interface ExpanderSectionStyles {
  overflow: string;
  transition: string;
  height: string;
}

export interface ExpanderSectionProps {
  'aria-hidden': boolean;
  'aria-labelledby': string;
  id: string;
  key: string;
  ref: (node: HTMLDivElement) => void;
  role: string;
  style: ExpanderSectionStyles;
}

export type GetExpanderSectionProps = (id: string, index: number) => ExpanderSectionProps;

export type IsActiveExpanderSection = (index: number) => boolean;

type ActiveSections = number[];

export const useExpander = () => {
  const headersRefs = useRef<RefObject<HTMLButtonElement>['current'][]>([]).current;

  const getHeaderRef = (index: number) => (node: HTMLButtonElement) => {
    if (node === null) {
      headersRefs.splice(index, 1);
    } else {
      headersRefs[index] = node;
    }
  };

  const sectionsRefs = useRef<RefObject<HTMLDivElement>['current'][]>([]).current;

  const getSectionRef = (index: number) => (node: HTMLDivElement) => {
    if (node === null) {
      sectionsRefs.splice(index, 1);
    } else {
      sectionsRefs[index] = node;
    }
  };

  const [activeSections, updateActiveSections] = useState<ActiveSections>([]);
  const isActiveSection: IsActiveExpanderSection = (index) => activeSections.includes(index);

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

  const toggleExpanderSection = (index: number) => {
    updateActiveSections((prevSections) =>
      prevSections.includes(index) ? prevSections.filter((i) => i !== index) : prevSections.concat(index),
    );
  };

  const [cursorPosition, updateCursorPosition] = useState<number>(-1);

  const getOnClick = (index: number) => () => {
    updateCursorPosition(index);
    toggleExpanderSection(index);
  };

  const getOnFocus = (index: number) => () => updateCursorPosition(index);

  const getLinkingId = (id: string) => `${id}-section`;

  const focusOnHeader = (nextCursorPosition: number) => {
    const headerRef = headersRefs[nextCursorPosition];
    if (headerRef) {
      headerRef.focus();
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
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

  const getHeaderProps: GetExpanderHeaderProps = (id, index) => ({
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

  const getSectionProps: GetExpanderSectionProps = (id, index) => ({
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
