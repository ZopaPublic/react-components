import AccordionComponent from './Accordion/Accordion';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionSection from './AccordionSection/AccordionSection';

export const Accordion = Object.assign(AccordionComponent, {
  Header: AccordionHeader,
  Section: AccordionSection,
});
