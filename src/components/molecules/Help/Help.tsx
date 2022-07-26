import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';
import Heading from '../../atoms/Heading/Heading';
import FlexCol from '../../layout/FlexCol/FlexCol';
import FlexRow from '../../layout/FlexRow/FlexRow';
import { colors } from '../../../constants';
import Card from '../../organisms/Card';
import { buttonStyle } from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const HelpWrap = styled.div`
  background: ${colors.white};
  box-sizing: border-box;
`;

const HelpContent = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const FlexColCenter = styled(FlexCol)`
  text-align: center;
`;

const ButtonAsLink = styled.a`
  ${buttonStyle}
`;

type DetailsProps = Record<
  HelpLine,
  {
    telephone: {
      label: string;
      tel: string;
    };
    text: React.ReactNode;
  }
>;

export const HelpLineDetails: DetailsProps = {
  borrowers: {
    telephone: {
      label: '020 7580 6060',
      tel: '+442075806060',
    },
    text: (
      <>
        We can't take applications over the phone. <br />
        UK residents only. Calls may be monitored or recorded
      </>
    ),
  },
  investors: {
    telephone: {
      label: '020 7291 8331',
      tel: '+442072918331',
    },
    text: (
      <>
        If you have any questions, our team are on hand to help. <br />
        UK residents only. Calls may be monitored or recorded.
      </>
    ),
  },
};

export enum HelpLine {
  borrowers = 'borrowers',
  investors = 'investors',
}

type HelpProps = { helpLine?: HelpLine; weekdayOpeningHours?: string; weekendOpeningHours?: string };
const Help = ({
  helpLine = HelpLine.borrowers,
  weekdayOpeningHours = '08:00 - 20:00',
  weekendOpeningHours = '09:00 - 17:30',
}: HelpProps) => (
  <HelpWrap className="pt-4">
    <HelpContent>
      <FlexRow>
        <FlexColCenter xs={12}>
          <Heading as="h3" className="pb-6">
            We're here to help
          </Heading>
          <Text className="pb-8" color={colors.grey}>
            {HelpLineDetails[helpLine].text}
          </Text>
        </FlexColCenter>
      </FlexRow>
      <FlexRow>
        <FlexCol xs={12} l={6} className="pb-6">
          <Card styling="primary">
            <Card.Content>
              <FlexRow>
                <FlexColCenter xs={3} align="center">
                  <Icon variant={faPhone} color={colors.brand} size="3x" />
                </FlexColCenter>
                <FlexCol xs={9}>
                  <Card.Heading>{HelpLineDetails[helpLine].telephone.label}</Card.Heading>
                  <Card.Text>
                    Monday - Friday {weekdayOpeningHours}, Saturday - Sunday {weekendOpeningHours}
                  </Card.Text>
                </FlexCol>
              </FlexRow>
              <Card.Actions>
                <ButtonAsLink styling="secondary" fullWidth href={`tel:${HelpLineDetails[helpLine].telephone.tel}`}>
                  Call us
                </ButtonAsLink>
              </Card.Actions>
            </Card.Content>
          </Card>
        </FlexCol>
        <FlexCol xs={12} l={6}>
          <Card styling="primary">
            <Card.Content>
              <FlexRow>
                <FlexColCenter xs={3} align="center">
                  <Icon variant={faEnvelope} color={colors.brand} size="3x" />
                </FlexColCenter>
                <FlexCol xs={9}>
                  <Card.Heading>contactus@zopa.com</Card.Heading>
                  <Card.Text>If your query is urgent, please contact our Team via phone.</Card.Text>
                </FlexCol>
              </FlexRow>
              <Card.Actions>
                <ButtonAsLink styling="secondary" fullWidth href="mailto:contactus@zopa.com">
                  Email us
                </ButtonAsLink>
              </Card.Actions>
            </Card.Content>
          </Card>
        </FlexCol>
      </FlexRow>
    </HelpContent>
  </HelpWrap>
);
export default Help;
