import React, { FC } from 'react';
import styled from 'styled-components';

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

const IconInfo = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
  </svg>
);

const IconAlert = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" />
  </svg>
);

const IconWarning = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
  </svg>
);

const IconSuccess = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

const MAP_BY_SEVERITY: TAlertElementsBySeverity = {
  info: { icon: '#818F9B', background: '#EFEFEF', text: '#2C3236', component: IconInfo },
  alert: { icon: '#FF453A', background: '#FFDAD8', text: '#940700', component: IconAlert },
  warning: { icon: '#FF9F0A', background: '#FFECCE', text: '#704300', component: IconWarning },
  success: { icon: '#3EBC64', background: '#DDFDE5', text: '#17592B', component: IconSuccess },
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
  fill: ${({ severity }) => MAP_BY_SEVERITY[severity].icon};

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

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const Alert: FC<IAlertProps> = ({ severity = 'info', children }) => {
  const Icon = MAP_BY_SEVERITY[severity].component;

  return (
    <Wrapper severity={severity}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Alert;
