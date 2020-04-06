import React from 'react';
import { colors } from '../../../constants/colors';

export interface IAlertProps {
  fillColor?: string;
  size?: string;
}

const AlertIcon: React.FunctionComponent<IAlertProps> = ({ fillColor = colors.actionPlain, size = '20px' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M-2-2h24v24H-2z" />
      <path
        d="M5.58 2.08L4.15.65C1.75 2.48.17 5.3.03 8.5h2a8.445 8.445 0 0 1 3.55-6.42zM17.97 8.5h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 0 1 3.54 6.42zM16 9c0-3.07-1.64-5.64-4.5-6.32V2c0-.83-.67-1.5-1.5-1.5S8.5 1.17 8.5 2v.68C5.63 3.36 4 5.92 4 9v5l-2 2v1h16v-1l-2-2V9zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default AlertIcon;
