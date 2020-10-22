import { createContext } from 'react';

import {
  GetExpanderHeaderProps,
  GetExpanderSectionProps,
  IsActiveExpanderSection,
} from '../../../../hooks/useExpander/useExpander';

export interface AccordionContext {
  getHeaderProps: GetExpanderHeaderProps;
  getSectionProps: GetExpanderSectionProps;
  isActiveSection: IsActiveExpanderSection;
}

export const AccordionContext = createContext<AccordionContext | undefined>(undefined);
