import * as React from 'react';
import styled from 'styled-components';

interface CircleExclamationProps {
  color: string;
}
const CircleExclamationIconWrapper = styled.div`
  width: 22.5px;
  height: 22.5px;
`;

function CircleExclamationIcon({ color }: CircleExclamationProps) {
  return (
    <CircleExclamationIconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill={color}
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
        />
      </svg>
    </CircleExclamationIconWrapper>
  );
}

export default CircleExclamationIcon;
