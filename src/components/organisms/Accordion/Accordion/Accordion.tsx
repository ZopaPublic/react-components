import React, { HTMLAttributes } from 'react';

import { AccordionContext } from '../context';
import { useAccordion } from '../../../../hooks/useAccordion';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

const Accordion = ({ children, ...rest }: AccordionProps) => {
  const context = useAccordion();
  return (
    <AccordionContext.Provider value={context}>
      <div {...rest}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
