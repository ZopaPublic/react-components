import React from 'react';

export interface IAccordionSection extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionSection: React.FunctionComponent<IAccordionSection> = React.forwardRef<
  HTMLDivElement,
  IAccordionSection
>(({ children, ...rest }, ref) => (
  <div {...rest}>
    <div ref={ref}>{children}</div>
  </div>
));

export default AccordionSection;
