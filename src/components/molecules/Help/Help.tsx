import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Link from '../../atoms/Link/Link';
import Text from '../../atoms/Text/Text';
import Heading from '../../atoms/Heading/Heading';
import FlexCol from '../../layout/FlexCol/FlexCol';
import FlexRow from '../../layout/FlexRow/FlexRow';
import { colors } from '../../../constants/colors';

const HelpWrap = styled.div`
  background: ${colors.neutral.white};
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

export interface IHelpProps extends HTMLAttributes<HTMLDivElement> {
  email: string;
}

const Help: React.FC<IHelpProps> = ({ email, ...rest }) => (
  <HelpWrap {...rest}>
    <HelpContent>
      <FlexRow gutter={16}>
        <FlexCol xs={12}>
          <Heading as="h3">We're here to help</Heading>
        </FlexCol>
      </FlexRow>
      <FlexRow gutter={16}>
        <FlexCol xs={12} l={6}>
          <Text mb>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
          <Text mb>
            <Link href="tel:020 7580 6060">020 7580 6060 </Link>
            for loans
          </Text>
          <Text>
            <Link href="tel:020 7291 8331">020 7291 8331 </Link>
            for investments
          </Text>
        </FlexCol>
        <FlexCol xs={12} l={6}>
          <OpeningHoursWrapper>
            <Text as="p" mb>
              Monday to Thursday (9am to 5.30pm), and Friday (9am to 5pm)
            </Text>
          </OpeningHoursWrapper>
          <Text size="small" as="p">
            We can't take applications over the phone. UK residents only. Calls may be monitored.
          </Text>
        </FlexCol>
      </FlexRow>
    </HelpContent>
  </HelpWrap>
);

export default Help;
