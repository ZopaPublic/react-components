import { createContext } from 'react';

import { TGetAccordionHeaderProps, TGetAccordionSectionProps, TIsActiveAccordionSection } from './useAccordion';

export interface IAccordionContext {
  getHeaderProps: TGetAccordionHeaderProps;
  getSectionProps: TGetAccordionSectionProps;
  isActiveSection: TIsActiveAccordionSection;
}

export const AccordionContext = createContext<IAccordionContext | undefined>(undefined);
