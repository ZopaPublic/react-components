import { createContext } from 'react';

import {
  TGetAccordionHeaderProps,
  TGetAccordionSectionProps,
  TIsActiveAccordionSection,
} from '../../../hooks/useAccordion/useAccordion';

interface IAccordionContext {
  getHeaderProps: TGetAccordionHeaderProps;
  getSectionProps: TGetAccordionSectionProps;
  isActiveSection: TIsActiveAccordionSection;
}

const AccordionContext = createContext<IAccordionContext | undefined>(undefined);

export default AccordionContext;
