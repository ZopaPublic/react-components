import React, { FC } from 'react';

const AccordionSection: FC = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...rest }, ref) => (
    <div {...rest}>
      <div ref={ref}>{children}</div>
    </div>
  ),
);

export default AccordionSection;
