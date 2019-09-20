import React, { FC } from 'react';

import Accordion, { IAccordion } from './Accordion/Accordion';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionSection from './AccordionSection/AccordionSection';

interface IAccordionStatic {
  Header: typeof AccordionHeader;
  Section: typeof AccordionSection;
}

const AccordionWrapper: IAccordionStatic & FC<IAccordion> = props => <Accordion {...props} />;

AccordionWrapper.Header = AccordionHeader;
AccordionWrapper.Section = AccordionSection;

export default AccordionWrapper;
