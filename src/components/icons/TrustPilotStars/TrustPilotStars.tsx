import React from 'react';

export interface ITrustPilotStarsProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
}

const TrustPilotStars: React.FunctionComponent<ITrustPilotStarsProps> = ({ width = '100%', ...rest }) => (
  <svg height="auto" width={width} xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" {...rest}>
    <title>Rated 4.9 out of 5</title>
    <g fill="none">
      <path d="M58 0h23.91v23.91H58z" fill="#00B679" />
      <path
        d="M69.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
        fill="#fff"
      />
      <path d="M29 0h23.91v23.91H29z" fill="#00B679" />
      <path
        d="M40.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
        fill="#fff"
      />
      <path d="M0 0h23.91v23.91H0z" fill="#00B679" />
      <path
        d="M11.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09H3.54l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
        fill="#fff"
      />
      <path d="M86 0h23.91v23.91H86z" fill="#00B679" />
      <path
        d="M97.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
        fill="#fff"
      />
      <g>
        <path d="M115 0h23.91v23.91H115z" fill="#00B679" />
        <path
          d="M126.97 16.17l3.63-.96 1.53 4.71zm8.37-6.09h-6.42l-1.98-6.09-1.98 6.09h-6.42l5.19 3.78-1.98 6.09 5.19-3.75 3.21-2.34z"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

export default TrustPilotStars;
