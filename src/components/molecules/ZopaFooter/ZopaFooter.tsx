import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import Legal from './Legal/Legal';
import Links from './Links/Links';

const Footer = styled.footer`
  padding: 40px 0;
`;

export interface IFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * This renders the legal copy only without any links.
   * This is useful for pages where by design requires the user to focus on one task.
   */
  legalOnly?: boolean;
  /**
   * This sets the base url for all links in the footer
   */
  baseUrl?: string;
}

const ZopaFooter = ({ legalOnly = false, baseUrl = 'https://www.zopa.com', ...rest }: IFooterProps) => (
  <Footer {...rest}>
    <FlexContainer gutter={16}>
      {legalOnly || <Links baseUrl={baseUrl} />}
      <Legal logoUrl={baseUrl} />
    </FlexContainer>
  </Footer>
);

ZopaFooter.defaultProps = {
  legalOnly: false,
};

export default ZopaFooter;
