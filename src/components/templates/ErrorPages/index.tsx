import React from 'react';

import ErrorPageTemplate from './Template/Template';
import Four0FourTemplate from './Four0Four/Four0Four';
import FiveHundredTemplate from './FiveHundred/FiveHundred';
import MaintenanceTemplate from './Maintenance/Maintenance';

interface ErrorTemplateProps {
  children: React.ReactNode;
}

const ErrorTemplate = ({ children }: ErrorTemplateProps) => <ErrorPageTemplate>{children}</ErrorPageTemplate>;

export default Object.assign(ErrorTemplate, {
  Four0Four: Four0FourTemplate,
  FiveHundred: FiveHundredTemplate,
  Maintenance: MaintenanceTemplate,
});
