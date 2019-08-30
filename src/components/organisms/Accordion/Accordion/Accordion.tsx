import React, { FC, HTMLAttributes } from 'react';

import { AccordionContext } from '../context';
import useAccordion from '../../../hooks/useAccordion/useAccordion';

export interface IAccordion extends HTMLAttributes<HTMLDivElement> {
  'aria-label': string;
}

const Accordion: FC<IAccordion> = ({ children, ...rest }) => {
  const context = useAccordion();
  return (
    <AccordionContext.Provider value={context}>
      <div {...rest}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
