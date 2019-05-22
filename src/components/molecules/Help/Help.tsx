import React from 'react';
import styled from 'styled-components';
import Link from '../../atoms/Link/Link';
import FlexCol from '../../layout/FlexCol/FlexCol';
import FlexRow from '../../layout/FlexRow/FlexRow';
import Caption from '../../typography/Caption/Caption';
import Header3 from '../../typography/Header3/Header3';
import Lead from '../../typography/Lead/Lead';

const HelpWrap = styled.div`
  background: white;
  padding: 80px 16px;
  box-sizing: border-box;
`;

const HelpContent = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const OpeningHoursWrapper = styled.div`
  max-width: 350px;
`;

export interface IHelpProps {
  email: string;
}

const Help: React.FunctionComponent<IHelpProps> = ({ email }) => (
  <HelpWrap>
    <HelpContent>
      <FlexRow gutter={16}>
        <FlexCol xs={12}>
          <Header3>We're here to help</Header3>
        </FlexCol>
      </FlexRow>
      <FlexRow gutter={16}>
        <FlexCol xs={12} l={6}>
          <Lead>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Lead>
          <Lead>
            <Link href="tel:020 7580 6060">020 7580 6060 </Link>
            for loans
          </Lead>
          <Lead>
            <Link href="tel:020 7291 8331">020 7291 8331 </Link>
            for investments
          </Lead>
        </FlexCol>
        <FlexCol xs={12} l={6}>
          <OpeningHoursWrapper>
            <Lead>Monday to Thursday (8am to 8pm), and Friday (8am to 5pm)</Lead>
          </OpeningHoursWrapper>
          <Caption>We can't take applications over the phone. UK residents only. Calls may be monitored.</Caption>
        </FlexCol>
      </FlexRow>
    </HelpContent>
  </HelpWrap>
);

export default Help;
