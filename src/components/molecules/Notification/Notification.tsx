import React from 'react';
import Alert, { AlertProps } from '../../atoms/Alert/Alert';

type NotificationProps = AlertProps;

const Notification = (props: NotificationProps) => {
  return <Alert hasRoundedCorners={false} {...props} />;
};

export default Notification;
