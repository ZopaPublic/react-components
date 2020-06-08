import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProps } from '../Modal/Modal';
import Text from '../../atoms/Text/Text';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

interface ExpiryModalProps extends ModalProps {
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

export default function ExpiryModal({ onEndSession, onKeepSession, ...rest }: ExpiryModalProps) {
  return (
    <Modal {...rest}>
      <ModalInner>
        <Heading as="h2" className="pb-5">
          Your session is about to expire
        </Heading>
        <Text as="p" className="pb-8">
          You've gone quiet. What would you like to do?
        </Text>
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
