import React from 'react';
import Modal, { ModalProps } from '../Modal/Modal';
import Button from '../../atoms/Button/Button';
import Card from '../../organisms/Card';

interface ExpiryModalProps extends Omit<ModalProps, 'children'> {
  /**
   * A callback that fires once the user clicks on 'Log out'
   */
  onEndSession: () => void;
  /**
   * A callback that fires once the user clicks on 'Continue'
   */
  onKeepSession: () => void;
}

export default function ExpiryModal({ onEndSession, onKeepSession, ...rest }: ExpiryModalProps) {
  return (
    <Modal showCloseButton={false} hideBackground {...rest}>
      <Card styling="primary">
        <Card.Content>
          <Card.Heading>Your session is about to expire</Card.Heading>
          <Card.Text>You've gone quiet. What would you like to do?</Card.Text>
          <Card.Actions>
            <Button onClick={onEndSession} styling="secondary">
              Log out
            </Button>
            <Button onClick={onKeepSession} styling="primary">
              Continue
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </Modal>
  );
}
