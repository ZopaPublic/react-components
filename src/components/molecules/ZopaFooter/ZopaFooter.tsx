import React from 'react';
import styled from 'styled-components';

import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import Legal from './Legal/Legal';
import Links from './Links/Links';
import Separator from './Separator/Separator';
import SocialLinks from './SocialLinks/SocialLinks';
import Wrapper from './Wrapper/Wrapper';
import { colors } from '../../../constants/colors';

const StyledWrapper = styled.div`
  background-color: ${colors.neutral.dark};
  padding: 40px 0;
`;

export interface IFooterProps {
  /**
   * This renders the legal copy only without any links.
   * This is useful for pages where by design requires the user to focus on one task.
   */
  legalOnly?: boolean;
}

const ZopaFooter: React.FunctionComponent<IFooterProps> = ({ legalOnly }) => (
  <StyledWrapper id="zopa-footer">
    <FlexContainer gutter={16}>
      {legalOnly || (
        <>
          <Wrapper>
            <SocialLinks />
          </Wrapper>
          <Wrapper>
            <Links />
          </Wrapper>
          <Separator />
        </>
      )}
      <Legal />
    </FlexContainer>
  </StyledWrapper>
);

ZopaFooter.defaultProps = {
  legalOnly: false,
};

export default ZopaFooter;
