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

const Help: React.FC = () => (
  <HelpWrap className="pt-4">
    <HelpContent>
      <FlexRow>
        <FlexColCenter xs={12}>
          <Heading as="h3" className="pb-6">
            We're here to help
          </Heading>
          <Text className="pb-8" color={colors.grey}>
            We can't take applications over the phone. <br />
            UK residents only. Calls may be monitored or recorded
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
                  <Card.Heading>020 7580 6060</Card.Heading>
                  <Card.Text>Monday to Thursday (8am to 8pm), Friday (8am to 5pm)</Card.Text>
                </FlexCol>
              </FlexRow>
              <Card.Actions>
                <ButtonAsLink styling="secondary" fullWidth href="tel:020 7580 6060">
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
                  <Card.Heading>contact@zopa.com</Card.Heading>
                  <Card.Text>If your query is urgent, please contact our Team via phone.</Card.Text>
                </FlexCol>
              </FlexRow>
              <Card.Actions>
                <ButtonAsLink styling="secondary" fullWidth href="mailto:contact@zopa.com">
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
