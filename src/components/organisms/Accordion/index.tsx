import React, { FC } from 'react';

import AccordionComponent, { AccordionProps } from './Accordion/Accordion';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionSection from './AccordionSection/AccordionSection';

interface AccordionStatic {
  Header: typeof AccordionHeader;
  Section: typeof AccordionSection;
}

export const Accordion: AccordionStatic & AccordionProps = (props) => <AccordionComponent {...props} />;

Accordion.Header = AccordionHeader;
Accordion.Section = AccordionSection;
