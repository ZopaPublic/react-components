import React, { FC } from 'react';

import { useAccordionContext } from '../context';

interface AccordionSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  index: number;
}

const AccordionSection: FC<AccordionSectionProps> = ({ children, id, index, ...rest }) => {
  const { getSectionProps } = useAccordionContext();
  const { ref, ...sectionPropsRest } = getSectionProps(id, index);
  return (
    <div {...sectionPropsRest} {...rest}>
      <div ref={ref} tabIndex={sectionPropsRest['aria-hidden'] ? -1 : undefined}>
        {children}
      </div>
    </div>
  );
};

export default AccordionSection;
