import { createContext } from 'react';

import {
  GetAccordionHeaderProps,
  GetAccordionSectionProps,
  IsActiveAccordionSection,
} from '../../../../hooks/useAccordion/useAccordion';

export interface AccordionContext {
  getHeaderProps: GetAccordionHeaderProps;
  getSectionProps: GetAccordionSectionProps;
  isActiveSection: IsActiveAccordionSection;
}

export const AccordionContext = createContext<AccordionContext | undefined>(undefined);
