import * as React from 'react';
import FlexContainer from '../../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../../layout/FlexRow/FlexRow';

import { ReactElement } from 'react';
import { navbarOpenHeight } from '../../../../constants';
import styled from 'styled-components';
import { useThemeContext } from '../../../styles/Theme';
import { Text } from '../../../..';
import classnames from 'classnames';

export interface ProductTemplateV2 {
  titleClassName: string;
  subtitleClassName: string;
  form: {
    subheadingPostion: 'before' | 'after';
    headingClassName: string;
    subheadingClassName: string;
  };
  row?: {
    className: string;
  };
}
type HeaderProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  progressBar?: React.ReactNode;
};

const Header = ({ title, subtitle, progressBar }: HeaderProps) => (
  <>
    {title}
    {progressBar}
    {subtitle}
  </>
);

type ProductTemplateProps = React.PropsWithChildren<{
  header?: HeaderProps;
  className?: string;
  contentWidth?: 6 | 8 | 10;
  prevStep?: ReactElement | string;
}>;

const Content = styled.section`
  min-height: calc(80vh - ${navbarOpenHeight}px);
  /* In case <Loading /> it's a direct child for it to be centered */
  position: relative;
`;

const HeaderContainer = styled.div`
  background-color: #eeeae4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function ProductTemplate({ header, children }: ProductTemplateProps) {
  const theme = useThemeContext();

  const templateClassName = theme?.productTemplateV2?.row?.className;

  return (
    <Content className="mb-8">
      <HeaderContainer className="product-template-header-container">
        <Header {...header} />
      </HeaderContainer>
      <FlexContainer data-automation="ZA.ProductTemplateV2.Container" gutter={0}>
        <FlexRow
          className={classnames(templateClassName || 'px-6 m:px-0', 'product-template-row')}
          gutter={0}
          justify="center"
        >
          <div>{children}</div>
        </FlexRow>
      </FlexContainer>
    </Content>
  );
}

type PreLabelProps = {
  title: string;
  subtitle: string;
};

const PreLabel = ({ title, subtitle }: PreLabelProps) => {
  const theme = useThemeContext();
  return (
    <>
      <Text size="body" className={`mb-2 ${theme?.productTemplateV2?.form.headingClassName}`} as="p">
        {title}
      </Text>
      <Text size="small" className={`mb-4 ${theme?.productTemplateV2?.form.subheadingClassName}`}>
        {subtitle}
      </Text>
    </>
  );
};
export { ProductTemplate, PreLabel };
