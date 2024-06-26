import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  negative?: boolean;
}

const LogoSvg = styled.path<LogoProps>`
  transition: fill 0.3s ease;
  fill: ${({ negative }) => (negative ? colors.white : colors.brandDecorative)};
`;

const Logo = ({ negative = false, height = '100%', width = '100%', ...rest }: LogoProps) => (
  <svg
    viewBox="0 0 208 38"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    aria-label="zopa logo"
    height={height}
    width={width}
    {...rest}
  >
    <title>Zopa Logo</title>
    <g>
      <LogoSvg
        negative={negative}
        d="M77 .3C88.8.3 97 8 97.4 19.2c0 5.3-2 10.1-5.7 13.6a20.8 20.8 0 01-14.5 5.5c-5.7 0-10.9-2-14.6-5.5A18.7 18.7 0 0157 19.2c0-5.3 2-10.1 5.6-13.6A21 21 0 0177.1.3zm57.7 1c4.5 0 8.2 1.2 10.7 3.5 2.4 2.4 3.8 5.8 3.8 10 0 8.6-5.4 14-14.1 14l-.4.1h-6.2v8.5h-10.8V1.2h17zm-98 0v1.2c0 6.9-7 13.6-12 18.5-1.8 1.7-3.4 3.3-4.4 4.6l-.2.3-.6.7h17v10.7H0V36c0-6.8 6.3-13 11.4-18 2.1-2 4-3.7 5-5.2v-.2l.5-.7H1.2V1.2h35.4zM194.1 1L208 37.2h-11.3l-2.2-5.8h-15l-2.3 5.8H166l13.8-36.1h14.4zM77 10.6a8.5 8.5 0 00-8.6 8.6 8.6 8.6 0 1017.2 0 8.6 8.6 0 00-8.6-8.6zM187 11.7L182.7 23h8.6L187 11.7zm-52.3-1.1h-6.2v9.3h6.2c2.7 0 4.5-2 4.5-4.8 0-2.7-1.8-4.5-4.5-4.5z"
      />
    </g>
  </svg>
);

export default Logo;
