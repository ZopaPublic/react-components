import React from 'react';
import styled from 'styled-components';
import Link from '../../atoms/Link/Link';
import Text from '../../atoms/Text/Text';
import FlexCol from '../../layout/FlexCol/FlexCol';
import FlexRow from '../../layout/FlexRow/FlexRow';

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
          <h3>We're here to help</h3>
        </FlexCol>
      </FlexRow>
      <FlexRow gutter={16}>
        <FlexCol xs={12} l={6}>
          <Text size={1}>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
          <Text size={1}>
            <Link href="tel:020 7580 6060">020 7580 6060 </Link>
            for loans
          </Text>
          <Text size={1}>
            <Link href="tel:020 7291 8331">020 7291 8331 </Link>
            for investments
          </Text>
        </FlexCol>
        <FlexCol xs={12} l={6}>
          <OpeningHoursWrapper>
            <Text size={1} as="p">
              Monday to Thursday (8am to 8pm), and Friday (8am to 5pm)
            </Text>
          </OpeningHoursWrapper>
          <Text size={3} as="p">
            We can't take applications over the phone. UK residents only. Calls may be monitored.
          </Text>
        </FlexCol>
      </FlexRow>
    </HelpContent>
  </HelpWrap>
);

export default Help;
