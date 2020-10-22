import React, { FC, HTMLAttributes } from 'react';

import { AccordionContext } from '../context';
import { useExpander } from '../../../../hooks/useExpander';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

const Accordion: FC<AccordionProps> = ({ children, ...rest }) => {
  const context = useExpander();
  return (
    <AccordionContext.Provider value={context}>
      <div {...rest}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
