import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import FlexContainer from '../../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import { ProductTemplateCard } from '../../ProductTemplate/ProductTemplateCard/ProductTemplateCard';

export interface ErrorTemplateProps {
  icon?: IconDefinition;
}

const ErrorTemplate: React.FC = ({ children }) => {
  return (
    <FlexContainer data-automation="ZA.ErrorPageTemplate" gutter={0}>
      <FlexRow justify="center" gutter={0}>
        <FlexCol xs={12} m={10} xl={6}>
          <ProductTemplateCard>
            <FlexRow justify="center">
              <FlexCol xs={12} className="mb-7">
                {children}
              </FlexCol>
            </FlexRow>
          </ProductTemplateCard>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
};

export default ErrorTemplate;
