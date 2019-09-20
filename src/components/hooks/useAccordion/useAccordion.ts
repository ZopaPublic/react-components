import { useRef, useState, Dispatch, SetStateAction, KeyboardEvent, RefObject } from 'react';
import { isArrowDown, isArrowUp } from '../../../helpers/keyboard-keys';
import { mod } from '../../../helpers/utils';

interface IAccordionHeaderProps {
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

export type TGetAccordionHeaderProps = (id: string, index: number) => IAccordionHeaderProps;

interface IAccordionSectionStyles {
  overflow: string;
  transition: string;
  height: string;
}

interface IAccordionSectionProps {
  'aria-hidden': boolean;
  'aria-labelledby': string;
  id: string;
  key: string;
  ref: (node: HTMLDivElement) => void;
  role: string;
  style: IAccordionSectionStyles;
}

export type TGetAccordionSectionProps = (id: string, index: number) => IAccordionSectionProps;

export type TIsActiveAccordionSection = (index: number) => boolean;

type TActiveSections = number[];

let activeSections: TActiveSections;
let updateActiveSections: Dispatch<SetStateAction<TActiveSections>>;

const useAccordion = () => {
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

  [activeSections, updateActiveSections] = useState<TActiveSections>([]);

  const isActiveSection: TIsActiveAccordionSection = index => activeSections.includes(index);

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

  const getHeaderProps: TGetAccordionHeaderProps = (id, index) => ({
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

  const getSectionProps: TGetAccordionSectionProps = (id, index) => ({
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
