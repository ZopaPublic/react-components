import * as React from 'react';
import styled from 'styled-components';

const CircleExclamationIconWrapper = styled.div`
  width: 22.5px;
  height: 22.5px;
`;

const CircleExclamation2Icon = ({ color }: { color: string }) => (
  <CircleExclamationIconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
      <g fill={color} clipPath="url(#a)">
        <path d="M8 1.28c3.72 0 6.72 3.04 6.72 6.72 0 3.68-3 6.72-6.72 6.72-3.72 0-6.72-3-6.72-6.72 0-3.72 3-6.72 6.72-6.72ZM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Z" />
        <path d="M8.8 3.92H7.12V9.4H8.8V3.92ZM7.96 10.36a.82.82 0 0 0-.84.84c0 .48.36.84.84.84s.84-.36.84-.84a.82.82 0 0 0-.84-.84Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  </CircleExclamationIconWrapper>
);
export default CircleExclamation2Icon;
