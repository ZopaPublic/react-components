import React, { FC } from 'react';
import styled from 'styled-components';
import { faCheckCircle, faExclamationCircle, faInfoCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/Icon';

type TSeverity = 'info' | 'alert' | 'warning' | 'success';

interface IAlertProps {
  severity?: TSeverity;
}

type TAlertElementsBySeverity = Record<
  TSeverity,
  {
    icon: string;
    background: string;
    text: string;
    component: FC;
  }
>;

const MAP_BY_SEVERITY: TAlertElementsBySeverity = {
  info: { icon: '#818F9B', background: '#EFEFEF', text: '#2C3236', component: () => <Icon variant={faInfoCircle} /> },
  alert: { icon: '#FF453A', background: '#FFDAD8', text: '#940700', component: () => <Icon variant={faMinusCircle} /> },
  warning: {
    icon: '#FF9F0A',
    background: '#FFECCE',
    text: '#704300',
    component: () => <Icon variant={faExclamationCircle} />,
  },
  success: {
    icon: '#3EBC64',
    background: '#DDFDE5',
    text: '#17592B',
    component: () => <Icon variant={faCheckCircle} />,
  },
};

const Wrapper = styled.div<Required<IAlertProps>>`
  display: flex;
  position: relative;
  padding: 8px 16px 8px 16px;
  background: ${({ severity }) => MAP_BY_SEVERITY[severity].background};
  color: ${({ severity }) => MAP_BY_SEVERITY[severity].text};
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;

  a {
    color: ${props => MAP_BY_SEVERITY[props.severity].text} !important;
    font-size: 15px;
    line-height: 20px;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const IconWrapper = styled.div<Required<IAlertProps>>`
  margin-right: 8px;
  font-size: 20px;
  color: ${({ severity }) => MAP_BY_SEVERITY[severity].icon};

  svg {
    display: block;
  }
`;

const Alert: FC<IAlertProps> = ({ severity = 'info', children, ...rest }) => {
  const Icon = MAP_BY_SEVERITY[severity].component;

  return (
    <Wrapper severity={severity} {...rest}>
      <IconWrapper severity={severity}>
        <Icon />
      </IconWrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Alert;
