import React, { FC, HTMLAttributes } from 'react';

import Accordion from './Accordion/Accordion';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionSection from './AccordionSection/AccordionSection';

interface IAccordionStatic {
  Header: typeof AccordionHeader;
  Section: typeof AccordionSection;
}

const AccordionWrapper: IAccordionStatic & FC<HTMLAttributes<HTMLDivElement>> = props => <Accordion {...props} />;

AccordionWrapper.Header = AccordionHeader;
AccordionWrapper.Section = AccordionSection;

export default AccordionWrapper;
