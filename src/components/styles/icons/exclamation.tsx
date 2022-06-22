import * as React from 'react';
import styled from 'styled-components';

interface ExclamationProps {
  color: string;
}
const ExclamationIconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

function ExclamationIcon({ color }: ExclamationProps) {
  return (
    <ExclamationIconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
        <defs>
          <path
            fill={color}
            d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0 1C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Zm.5-13v8h-1v-8h1ZM12 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            id="a"
          />
        </defs>
        <use transform="rotate(-180 12 12)" xlinkHref="#a" fillRule="evenodd" />
      </svg>
    </ExclamationIconWrapper>
  );
}

export default ExclamationIcon;
