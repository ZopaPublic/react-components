import React, { FC, HTMLAttributes } from 'react';

import { AccordionContext } from '../context';
import useAccordion from '../../../hooks/useAccordion/useAccordion';

const Accordion: FC<HTMLAttributes<HTMLDivElement>> = props => {
  const context = useAccordion();
  return <AccordionContext.Provider value={context} {...props} />;
};

export default Accordion;
