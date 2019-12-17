import React from 'react';
import styled from 'styled-components';
import Modal, { TModalProps } from '../Modal/Modal';
import Text from '../../atoms/Text/Text';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

interface IExpiryModalProps extends TModalProps {
  /**
   * A callback that fires once the user clicks on 'Log out'
   **/
  onEndSession: () => void;
  /**
   * A callback that fires once the user clicks on 'Continue'
   **/
  onKeepSession: () => void;
}

const ModalInner = styled.div`
  padding: 50px 40px 40px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SessionHint = styled(Text).attrs({
  forwardedAs: 'p',
})`
  margin-bottom: 40px;
`;

export default function ExpiryModal({ onEndSession, onKeepSession, ...rest }: IExpiryModalProps) {
  return (
    <Modal {...rest}>
      <ModalInner>
        <Heading as="h2">Your session is about to expire</Heading>
        <SessionHint>You've gone quiet. What would you like to do?</SessionHint>
        <ButtonRow>
          <Button onClick={onEndSession} styling="link">
            Log out
          </Button>
          <Button onClick={onKeepSession}>Continue</Button>
        </ButtonRow>
      </ModalInner>
    </Modal>
  );
}
