// THEME ME ProductTemplate component
import * as React from 'react';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexContainer from '../../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../../layout/FlexRow/FlexRow';

import { ReactElement } from 'react';
import { navbarOpenHeight } from '../../../../constants';
import styled from 'styled-components';

export interface ProductTemplateV2 {
  backgroundColor: string;
  header: {
    backgroundColor: string;
    height: string;
  };
}
type MaybeHeaderProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  progressBar?: React.ReactNode;
};

const MaybeHeader = ({ title, subtitle, progressBar }: MaybeHeaderProps) => (
  <header className="maybe-header">
    {title}
    {progressBar}
    {subtitle}
  </header>
);

type ProductTemplateProps = React.PropsWithChildren<{
  header?: MaybeHeaderProps;
  className?: string;
  contentWidth?: 6 | 8 | 10;
  prevStep?: ReactElement | string;
}>;

const Content = styled.section`
  min-height: calc(80vh - ${navbarOpenHeight}px);
  /* In case <Loading /> it's a direct child for it to be centered */
  position: relative;
`;

function ProductTemplate({ header, children, contentWidth = 6 }: ProductTemplateProps) {
  return (
    <Content>
      <div
        className="product-template-header-container"
        style={{ backgroundColor: '#EEEAE4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <MaybeHeader {...header} />
      </div>
      <FlexContainer data-automation="ZA.ProductTemplate" gutter={0}>
        <FlexRow className="product-template-row" gutter={0}>
          <FlexCol>
            <FlexRow justify="center" gutter={0}>
              <FlexCol m={10} xl={contentWidth}>
                {children}
              </FlexCol>
            </FlexRow>
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </Content>
  );
}

export { ProductTemplate };
