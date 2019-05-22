import React from 'react';
import styled from 'styled-components';

import * as colors from '../../../constants/colors';
import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import Legal from './Legal/Legal';
import Links from './Links/Links';
import MiscLinks from './MiscLinks/MiscLinks';
import Separator from './Separator/Separator';
import SocialLinks from './SocialLinks/SocialLinks';
import Wrapper from './Wrapper/Wrapper';

const StyledWrapper = styled.div`
  background-color: ${colors.neutral.neutral900};
  padding: 40px 0;
`;

export interface IFooterProps {
  /**
   * This renders the legal copy only without any links.
   * This is useful for pages where by design requires the user to focus on one task.
   * @default false
   */
  legalOnly?: boolean;
}

const ZopaFooter: React.FunctionComponent<IFooterProps> = ({ legalOnly }) => (
  <StyledWrapper id="zopa-footer">
    <FlexContainer gutter={16}>
      {legalOnly || <Links />}
      <Legal />
      {legalOnly || (
        <>
          <Wrapper>
            <SocialLinks />
          </Wrapper>
          <Separator />
          <Wrapper>
            <MiscLinks />
          </Wrapper>
        </>
      )}
    </FlexContainer>
  </StyledWrapper>
);

ZopaFooter.defaultProps = {
  legalOnly: false,
};

export default ZopaFooter;
