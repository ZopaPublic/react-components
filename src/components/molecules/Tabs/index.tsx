import React, { FC } from 'react';

import AccordionComponent, { AccordionProps } from './Accordion/Accordion';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionSection from './AccordionSection/AccordionSection';

interface AccordionStatic {
  Header: typeof AccordionHeader;
  Section: typeof AccordionSection;
}

export const Accordion: AccordionStatic & FC<AccordionProps> = (props) => <AccordionComponent {...props} />;

Accordion.Tabs = TabsContainer;
Accordion.Section = TabContent;

// export * from './hooks';
