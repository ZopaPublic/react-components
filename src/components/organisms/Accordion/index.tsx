import React, { FC } from 'react';

import AccordionComponent, { IAccordion } from './Accordion/Accordion';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionSection from './AccordionSection/AccordionSection';

interface IAccordionStatic {
  Header: typeof AccordionHeader;
  Section: typeof AccordionSection;
}

export const Accordion: IAccordionStatic & FC<IAccordion> = props => <AccordionComponent {...props} />;

Accordion.Header = AccordionHeader;
Accordion.Section = AccordionSection;

export * from './hooks';
