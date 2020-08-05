import React, { FC, Children } from 'react';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';

type FormSectionProps = {
  title?: string;
  subtitle?: string;
};

const FormSection: FC<FormSectionProps> = ({ title, subtitle, children }) => {
  const childrenLength = Children.count(children);
  return (
    <div className="py-6">
      {title && (
        <Heading as="h5" className="mb-2">
          {title}
        </Heading>
      )}
      {subtitle && <Text className="mb-6">{subtitle}</Text>}
      {Children.map(children, (child, index) => (
        <div className={index < childrenLength - 1 ? 'mb-4' : undefined}>{child}</div>
      ))}
    </div>
  );
};

export default FormSection;
