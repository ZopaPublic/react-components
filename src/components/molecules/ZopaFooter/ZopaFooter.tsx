import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import Legal from './Legal/Legal';
import Links from './Links/Links';
import Separator from './Separator/Separator';
import SocialLinks from './SocialLinks/SocialLinks';
import Wrapper from './Wrapper/Wrapper';
import { colors } from '../../../constants/colors';

const Footer = styled.footer`
  background-color: ${colors.greyDarkest};
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
      {legalOnly || (
        <>
          <Wrapper>
            <SocialLinks logoUrl={baseUrl} />
          </Wrapper>
          <Wrapper>
            <Links baseUrl={baseUrl} />
          </Wrapper>
          <Separator />
        </>
      )}
      <Legal />
    </FlexContainer>
  </Footer>
);

ZopaFooter.defaultProps = {
  legalOnly: false,
};

export default ZopaFooter;
